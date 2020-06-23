import { InterceptorService } from './interceptor.service';
import { EndpointsService } from './endpoints.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService,
    private interceptorService: InterceptorService
  ) { }

  register(body) {
    return this.http.post(this.endpoints.registerMentor(), body, { headers: this.interceptorService.headers() });
  }

  login(body) {
    return this.http.post(this.endpoints.login(), body, { headers: this.interceptorService.headers() });
  }

}
