import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as crypto from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  constructor(private http: HttpClient) {}

  loginUser = (username, password) => {
    const url = 'http://localhost:8080/authenticate';
    const encryptedpsd = crypto.AES.encrypt(
      password,
      '1234567890123456'
    ).toString();
    console.log('encryptedpsd', encryptedpsd);
    this.http
      .post(url, { username, encryptedpsd })
      .subscribe(data => console.log('data', data));
  };
}
