import { Injectable } from '@angular/core';
import { TokenInterceptorService} from './helpers/token-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor(private tokenInterceptorService: TokenInterceptorService) { }

  // registerMentor(){
  //   return this.tokenInterceptorService.apiHost + 'auth/mentor/register/';
  // }

  // registerStudent() {
  //   return this.tokenInterceptorService.apiHost + 'auth/student/register/';
  // }

  // login() {
  //   return this.tokenInterceptorService.apiHost + 'auth/login/';
  // }

}

