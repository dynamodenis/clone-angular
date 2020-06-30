import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';

=======
import { TokenInterceptorService} from './helpers/token-interceptor.service';
import { HttpClient } from '@angular/common/http';
>>>>>>> 7ed7eb7... Feature/user profile (#5)

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {
  apiHost = 'http://127.0.0.1:8000/api/';
  profileUrl="http://127.0.0.1:8000";



  constructor( private http: HttpClient) { }

  getProfile(){
    return this.http.get(this.apiHost+'user/profile/')
  }

  updateProfile(id:number){
    return this.http.put(this.apiHost+'user/'+id+'/profile/', id)
  }

<<<<<<< HEAD
=======
  apiHost = 'http://127.0.0.1:8000/api/'
>>>>>>> 7ed7eb7... Feature/user profile (#5)

  constructor(private tokenInterceptorService: TokenInterceptorService,private http: HttpClient,) { }


  getProfile(id:number){
    return this.http.get(this.apiHost+'user/'+id+'/profile/')
  }
}

