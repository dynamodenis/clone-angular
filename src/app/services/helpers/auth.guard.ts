import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Statement } from '@angular/compiler';
import { AuthService } from '../auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authservice: AuthService, 
    private router: Router
    ){}
    canActivate(): boolean{
      if(this.authservice.loggedIn()){
        return true
      } else{
        this.router.navigate(['login'])
        return false
      }
    }
}
