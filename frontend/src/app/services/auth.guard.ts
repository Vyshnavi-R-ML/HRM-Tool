import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService, private  router: Router) {}

  canActivate = (): boolean => {
      if (!this._authService.isAuthenticated()) {
        this.router.navigate(['auth']);
        return false;
      }
      return true
  }
  
}
