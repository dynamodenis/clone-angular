import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { Statement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authservice: AuthService, 
    private router: Router
    ){}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
      if(this.authservice.loggedIn()){
        return true
      } else{
        this.router.navigate(['login'],  { queryParams: { returnUrl: state.url }})
        return false
      }
    }

  
}
