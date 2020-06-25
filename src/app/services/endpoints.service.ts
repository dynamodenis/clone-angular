import { Injectable } from '@angular/core';
import { TokenInterceptorService} from './helpers/token-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor(private tokenInterceptorService: TokenInterceptorService) { }

}

