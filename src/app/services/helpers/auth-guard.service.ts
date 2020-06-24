import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { TokenInterceptorService } from '../token-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
      private tokenInterceptorService: TokenInterceptorService,
      private router: Router
    ) {}

  canActivate(): boolean {
    if (!this.tokenInterceptorService.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}