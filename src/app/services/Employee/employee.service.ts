import { Injectable } from '@angular/core';
import { Employee } from 'src/models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor() {}

  createNewEmployee = (employee: Employee) => {
    const url = 'http://localhost:8080/employees/add';
    fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(employee) // body data type must match "Content-Type" header
    })
      .then(response => response.json())
      .then(data => console.log('data', data))
      .catch(error => console.log('error', error)); // parses JSON response into native JavaScript objects
  };
}
