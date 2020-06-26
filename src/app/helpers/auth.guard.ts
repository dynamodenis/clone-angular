import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Statement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authservice: AuthService, 
    private router: Router
    ){}
    
    canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      const currentUser = this.authservice.currentUserValue;
      console.log(currentUser)
      if (currentUser){
        return true;
      }
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
  
}
