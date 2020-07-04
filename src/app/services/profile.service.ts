import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndpointsService } from './endpoints.service';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  apiHost = 'https://codemoschool.herokuapp.com/api/';
  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService,
    private globalService: GlobalService,
  ) { }

  // getProfile(id: number){
  //   return this.http.get(this.endpoints.profile(id),{headers: this.globalService.headers()})
  // }
  getProfile(id:number){
    return this.http.get(this.apiHost+'user/'+id+'/profile/')
  }
}
