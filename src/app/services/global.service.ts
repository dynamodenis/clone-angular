
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
    // 'Authorization': 'Token 52295140db0e194892e7de3dcf77628c485c1bff12cccfc392d8a146552a2999'
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
