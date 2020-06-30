 
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http'
import { tokenName } from '@angular/compiler';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    private cookieService: CookieService,
    private authService: AuthService
  ) { }

  apiHost = 'http://127.0.0.1:8000/api/';
  httpHeaders = {'Content-Type': 'application/json'};




  headers(){
    let token=this.authService.getToken();
    // console.log(token)
    if (token !==''){
      this.httpHeaders['Authorization']= 'Bearer'+' '+ token;
    }
    // console.log(this.httpHeaders)
    return new HttpHeaders(this.httpHeaders)
    // return this.httpHeaders
  }


  isAuthenticated(){
    const token=this.authService.getToken();
    return token ===''? false:true;
  }


}
