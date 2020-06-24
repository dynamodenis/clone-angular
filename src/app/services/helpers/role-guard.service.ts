import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot} from '@angular/router';
import { TokenInterceptorService as TokenInterceptor, TokenInterceptorService } from '../token-interceptor.service';
import decode from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor( 
    public tokenInterceptor: TokenInterceptor, 
    public router: Router,
    private cookieService: CookieService) { }

  // ActivatedRouteSnapshot gives us access to the data property of a given route

  canActivate(route: ActivatedRouteSnapshot): boolean { 
    const expectedRole = route.data.expectedRole;    
    const token = this.cookieService.get('token');    
    const tokenPayload = decode(token);    if (
      !this.isAuthenticated() || 
      tokenPayload.role !== expectedRole
    ) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}

