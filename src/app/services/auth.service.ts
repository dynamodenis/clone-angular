import { TokenInterceptorService } from './token-interceptor.service';
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
    private tokenInterceptorService: TokenInterceptorService
  ) { }

  mentorRegister(body) {
    return this.http.post(this.endpoints.registerMentor(), body, { headers: this.tokenInterceptorService.headers() });
  }

  studentRegister(body) {
    return this.http.post(this.endpoints.registerStudent(), body, { headers: this.tokenInterceptorService.headers() });
  }

  login(body) {
    return this.http.post(this.endpoints.login(), body, { headers: this.tokenInterceptorService.headers() });
  }

}
