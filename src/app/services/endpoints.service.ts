import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor(private globalService:GlobalService ) { }

  profile(id:number){
    return this.globalService.apiHost +"user/"+ id +"/profile/";
  }
}
