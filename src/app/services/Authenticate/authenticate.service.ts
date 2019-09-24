import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  constructor() {}

  loginUser = (username, password) => {
    // Example POST method implementation:
    const url = 'http://localhost:8080/employees/login';
    const data = { username, password };
    fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
      .then(response => response.json())
      .then(data => console.log('data', data))
      .catch(error => console.log('error', error)); // parses JSON response into native JavaScript objects
  };
}
