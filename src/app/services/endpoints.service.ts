import { Injectable } from '@angular/core';
import { TokenInterceptorService} from './helpers/token-interceptor.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  apiHost = 'http://127.0.0.1:8000/api/';
  profileUrl="http://127.0.0.1:8000";


  constructor(private tokenInterceptorService: TokenInterceptorService,private http: HttpClient, private globalService:GlobalService) { }


  // getProfile(id:number){
  //   // console.log(this.globalService.headers())
  //   return this.http.get(this.apiHost+'user/'+id+'/profile/')
  // }

  getProfile(){
    return this.http.get(this.apiHost+'user/profile/')
  }

  updateProfile(id:number,body){
    return this.http.put(this.apiHost+'user/'+id+'/profile/',body,{headers: this.globalService.headers()})
  }
}

