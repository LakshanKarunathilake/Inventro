import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivate
} from '@angular/router';
import { AuthenticateService } from '../services/Authenticate/authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthenticateService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // return true;  // For now testing
    if (this.auth.getAuthToken()) {
      console.log('Auth guard empty');
      return true;
    }
    console.log('Auth guard not empty');

    this.router.navigate(['login']);
    return false;
  }
}
