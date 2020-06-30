import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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


}

