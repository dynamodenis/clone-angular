import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenInterceptorService} from '../helpers/token-interceptor.service';




@Injectable({
  providedIn: 'root'
})
export class EndpointsService {



  constructor(private tokenInterceptorService: TokenInterceptorService, private http: HttpClient) { }


}

