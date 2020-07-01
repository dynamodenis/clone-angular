import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {
  constructor( private cookieService: CookieService) {}

  apiHost = 'http://127.0.0.1:8000/api/auth/';
  httpHeaders = { 'Content-Type': 'application/json' };


  headers() {
    const token = this.getToken();

    if (token !== '') {
      // tslint:disable-next-line: no-string-literal
      this.httpHeaders['Authorization'] = 'Token ' + token;
    }
    return new HttpHeaders(this.httpHeaders);
  }

  setToken(token: string) {
    this.cookieService.set('Token', token);
  }

  isAuthenticated() {
    const token = this.getToken();
    // if token is empty return false else return true
    return token === '' ? false : true;
  }

  getToken() {
    return this.cookieService.get('token');
  }

}
