import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticateService } from '../Authenticate/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authentication: AuthenticateService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(req.url);

    const token = this.authentication.getAuthToken();
    if (token) {
      const clonedReq = req.clone({
        // headers:req.headers.set("Authorization","Bearer "+token)
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log('auth header added');
      return next.handle(clonedReq);
    } else {
      console.log('auth header not added');
      return next.handle(req);
    }
  }
}
