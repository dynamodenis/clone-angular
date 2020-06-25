import { Injectable } from '@angular/core';
import { TokenInterceptorService} from './helpers/token-interceptor.service';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  apiHost = 'http://127.0.0.1:8000/api/'

  constructor(private tokenInterceptorService: TokenInterceptorService,private globalService:GlobalService) { }


  profile(id:number){
    return this.globalService.apiHost +"user/"+ id +"/profile/";
  }
}

