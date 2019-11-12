import { Injectable } from '@angular/core';
import { Employee } from 'src/models/Employee';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SwalService } from '../swal/swal.service';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { BookAsset } from 'src/models/BookAsset';
import { AuthenticateService } from '../Authenticate/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(
    private http: HttpClient,
    private swal: SwalService,
    private sanitizer: DomSanitizer,
    private auth: AuthenticateService
  ) {}

  createNewEmployee = (employee: Employee) => {
    const url = `${environment.backendURL}employees/add`;
    return this.http.post<Employee>(url, employee).toPromise();
  };

  getAllEmployees = () => {
    const url = `${environment.backendURL}employees/all`;
    return this.http.get<Employee[]>(url).pipe(
      map(emps => {
        const updated = emps.map(emp => {
          if (emp.img) {
            emp.img = this.sanitizer.bypassSecurityTrustUrl(
              emp.img.substring(36, emp.img.length - 2)
            );
          }

          return emp;
        });
        return updated;
      })
    );
  };

  foregetPassword = (email, password) => {
    const url = `${environment.backendURL}sendmail`;
    this.http
      .post(url, {
        resetEmail: email,
        newPassword: password,
        confirmNewPassword: password
      })
      .toPromise()
      .then(() => {
        this.swal.viewSuccessMessage(
          'Success',
          `Password reset email is sent to ${email} please check`
        );
      })
      .catch(err => {
        console.log('err', err);
        this.swal.viewErrorMessage(
          'Error',
          'Sorry your email is not sent please check again'
        );
      });
  };

  blockUser = (nic: string) => {
    const url = `${environment.backendURL}employees/blockuser`;
    this.http
      .get(url, {
        params: {
          nic
        }
      })
      .toPromise()
      .then(() => {
        this.swal.viewSuccessMessage('Success', 'User blocked Successfully');
      })
      .catch(() => {
        this.swal.viewErrorMessage(
          'Error',
          'Sorry user blocking failed please try again'
        );
      });
  };

  unblockUser = (nic: string) => {
    const url = `${environment.backendURL}employees/unblockuser`;
    this.http
      .get(url, {
        params: {
          nic
        }
      })
      .toPromise()
      .then(() => {
        this.swal.viewSuccessMessage('Success', 'User unblocked Successfully');
      })
      .catch(() => {
        this.swal.viewErrorMessage(
          'Error',
          'Sorry user unblocking failed please try again'
        );
      });
  };

  getRequests = () => {
    const url = `${environment.backendURL}assign/request/view/all`;
    return this.http.get<BookAsset[]>(url);
  };

  getBookings = () => {
    const url = `${environment.backendURL}assign/book/view/all`;
    return this.http.get<BookAsset[]>(url);
  };

  approveBooking = id => {
    const status = this.auth.getUser().status;
    let sub = '';
    if (status === 'Asset Manager') {
      sub = 'assetmanager';
    } else if (status === 'Department Head') {
      sub = 'departmenthead';
    }
    const url = `${environment.backendURL}assign/confirmation/${sub}`;
    console.log('url', url);
    console.log('id', id);
    this.http
      .post(url, id)
      .toPromise()
      .then(() => {
        this.swal.viewSuccessMessage('Success', 'Approved successfully');
      })
      .catch(err => {
        console.log('err', err);
        this.swal.viewErrorMessage(
          'Error',
          'Sorry approval is not recordered please try again'
        );
      });
  };

  assignReject = id => {
    const status = this.auth.getUser().status;
    console.log('id', id);
    let sub = '';
    if (status === 'Asset Manager') {
      sub = 'assetmanager';
    } else if (status === 'Department Head') {
      sub = 'departmenthead';
    }
    const url = `${environment.backendURL}assign/reject/${sub}`;
    this.http
      .post(url, id)
      .toPromise()
      .then(() => {
        this.swal.viewSuccessMessage('Success', 'Approved successfully');
      })
      .catch(err => {
        console.log('err', err);
        this.swal.viewErrorMessage(
          'Error',
          'Sorry approval is not recordered please try again'
        );
      });
  };
}
