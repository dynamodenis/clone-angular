
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    private cookieService: CookieService
  ) { }

  apiHost = 'http://127.0.0.1:8000/api/';
  httpHeaders = {'Content-Type': 'application/json',
    // tslint:disable-next-line: object-literal-key-quotes
  // 'Authorization': 'Token 7c00f8d475daf0fd7be808be173e09677b7640f463e3bc6865c22707cf04d531'
};

  headers() {
    const token = this.getToken();

    if (token !== '') {
      // tslint:disable-next-line: no-string-literal
      this.httpHeaders['Authorization'] = 'Token ' + token;

    }

    return new HttpHeaders(this.httpHeaders);
  }

  setToken(token: string) {
    this.cookieService.set('ATN', token);
  }

  isAuthenticated() {
    const token = this.getToken();
    return token === '' ? false : true;
  }

  getToken() {
    return this.cookieService.get('ATN');
  }

}
