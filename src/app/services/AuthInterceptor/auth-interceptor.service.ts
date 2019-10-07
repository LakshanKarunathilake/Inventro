import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(req.url);

    const token = localStorage.getItem('auth_token');
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
