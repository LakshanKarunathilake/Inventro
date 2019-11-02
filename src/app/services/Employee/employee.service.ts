import { Injectable } from '@angular/core';
import { Employee } from 'src/models/Employee';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  createNewEmployee = (employee: Employee) => {
    const url = `${environment.backendURL}/employees/add`;
    this.http
      .post<Employee>(url, employee)
      .toPromise()
      .then(data => console.log('data', data))
      .catch(error => console.log('error', error)); // parses JSON response into native JavaScript objects
  };
}
