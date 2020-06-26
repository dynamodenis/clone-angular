import { Injectable } from '@angular/core';
import { TokenInterceptorService} from './helpers/token-interceptor.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  apiHost = 'http://127.0.0.1:8000/api/'

  constructor(private tokenInterceptorService: TokenInterceptorService,private http: HttpClient,) { }


  getProfile(id:number){
    return this.http.get(this.apiHost+'user/'+id+'/profile/')
  }
}

