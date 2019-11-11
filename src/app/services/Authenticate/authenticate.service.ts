import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwalService } from '../swal/swal.service';
import { environment } from 'src/environments/environment';

interface LoginResponse {
  token: string;
  status: string;
  email: string;
  nic: string;
  firstname: string;
  lastname: string;
  img: string;
  contactno: string;
  unblocked: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private userType;
  private authToken;
  private user: LoginResponse;
  constructor(private http: HttpClient, private sweet: SwalService) {}

  loginUser = (username, password) => {
    return new Promise((res, rej) => {
      this.http
        .post(environment.backendURL + 'authenticate', { username, password })
        .toPromise()
        .then((data: LoginResponse) => {
          this.user = data;
          if (data.unblocked) {
            res('success');
            // this.writeToSessionStorage(data.token);
            // this.writeToSessionStorage(data.status);
            this.authToken = data.token;
            this.userType = data.status;
            this.sweet.viewSuccessMessage(
              'Success',
              'You are successfully logged in welcome back'
            );
          } else {
            this.sweet.viewErrorMessage(
              'Error',
              'Sorry you are blocked please contact administrator'
            );
            rej('Blocked users');
          }
        })
        .catch(error => {
          this.sweet.viewErrorMessage(
            'Login Error',
            'Please check your credentials again !'
          );
          rej('error');
        });
    });
  };

  // writeToSessionStorage = item => {
  //   sessionStorage.setItem('auth_token', item);
  //   console.log('Token Written successfully', item);
  // };

  logoutUser = () => {
    sessionStorage.removeItem('auth_token');
    this.sweet.viewSuccessMessage(
      'Success',
      'You are successfully logged out !'
    );
  };

  getAuthToken = () => {
    return this.authToken;
  };

  getUserType = () => {
    return this.userType;
  };

  getUser = () => {
    return this.user;
  };
}
