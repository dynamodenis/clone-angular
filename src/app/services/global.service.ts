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
  'Authorization': 'Token 2d2317064a353bf2f83d4e4ed60a4078ce3d4de7cadecea063303fecd03209b0'};

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
