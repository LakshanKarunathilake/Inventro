import { Injectable } from '@angular/core';
import { Employee } from 'src/models/Employee';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SwalService } from '../swal/swal.service';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { BookAsset } from 'src/models/BookAsset';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(
    private http: HttpClient,
    private swal: SwalService,
    private sanitizer: DomSanitizer
  ) {}

  createNewEmployee = (employee: Employee) => {
    const url = `${environment.backendURL}employees/add`;
    this.http
      .post<Employee>(url, employee)
      .toPromise()
      .then(() => {
        this.swal.viewSuccessMessage(
          'Success',
          'Employee added successfully !'
        );
      })
      .catch(error =>
        this.swal.viewErrorMessage(
          'Error',
          'Sorry we could not place your request'
        )
      ); // parses JSON response into native JavaScript objects
  };

  getAllEmployees = () => {
    const url = `${environment.backendURL}employees/all`;
    return this.http.get<Employee[]>(url).pipe(
      map(emps => {
        const updated = emps.map(emp => {
          emp.img = this.sanitizer.bypassSecurityTrustUrl(
            emp.img.substring(36, emp.img.length - 2)
          );
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
}
