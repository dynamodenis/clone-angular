import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http'
import { tokenName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    private cookieService: CookieService
  ) { }

  apiHost = 'http://127.0.0.1:8000/api/';
  httpHeaders = {'Content-Type': 'application/json'};

  headers(){
    const token=this.getToken();
    if (token !==''){
      // this.httpHeaders['Authorization']='Token' + 'e887851bf3fd85375ec287f0cf977a60b1a29be8';
      this.httpHeaders['Authorization']= 'Token' + token ;
    }
    return new HttpHeaders(this.httpHeaders)
  }


  setToken(token:string){
    this.cookieService.set('ATN',token)
  }

  isAuthenticated(){
    const token=this.getToken();
    return token ===''? false:true;
  }

  getToken(){
    return this.cookieService.get('ATN')
  }
}
