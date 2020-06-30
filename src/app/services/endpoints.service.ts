import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenInterceptorService} from './helpers/token-interceptor.service';
import { HttpHeaders } from '@angular/common/http'
import { GlobalService } from './global.service';


@Injectable({
  providedIn: 'root'
})
export class EndpointsService {
  apiHost = 'http://127.0.0.1:8000/api/';
  profileUrl="http://127.0.0.1:8000";


  constructor(private tokenInterceptorService: TokenInterceptorService,private http: HttpClient) { }


  // getProfile(id:number){
  //   // console.log(this.globalService.headers())
  //   return this.http.get(this.apiHost+'user/'+id+'/profile/')
  // }

  getProfile(){
    return this.http.get(this.apiHost+'user/profile/')
  }

  updateProfile(body){
    return this.http.put(this.apiHost+'user/profile/',body)
  }
}


