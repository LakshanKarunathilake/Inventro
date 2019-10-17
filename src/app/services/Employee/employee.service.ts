import { Injectable } from '@angular/core';
import { Employee } from 'src/models/Employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  hostURL = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}

  createNewEmployee = (employee: Employee) => {
    const subURL = 'employees/add';
    this.http
      .post<Employee>(this.hostURL + subURL, employee)
      .toPromise()
      .then(data => console.log('data', data))
      .catch(error => console.log('error', error)); // parses JSON response into native JavaScript objects
  };
}
