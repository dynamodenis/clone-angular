import { Injectable } from '@angular/core';
import { InterceptorService } from './interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor( private interceptorService: InterceptorService) { }

  registerMentor(){
    return this.interceptorService.apiHost + 'mentor/register/';
    // returns the path
  }

  login() {
    return this.interceptorService.apiHost + 'login/';
  }

}

