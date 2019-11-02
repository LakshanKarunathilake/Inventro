import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  constructor(private http: HttpClient) {}

  loginUser = (username, password) => {
    const url = 'http://localhost:8080/authenticate';
    this.http
      .post(url, { username, password })
      .subscribe(data => console.log('data', data));
  };
}
