import { Injectable } from '@angular/core';
import { Employee } from 'src/models/Employee';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SwalService } from '../swal/swal.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient, private swal: SwalService) {}

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
    return this.http.get<Employee[]>(url);
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
}
