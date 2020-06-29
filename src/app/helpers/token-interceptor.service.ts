import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = localStorage.getItem('Bearer');
  
      if (token) {
        const cloned = req.clone({
          headers: req.headers.set('Authorization', 'Bearer '.concat(token))
        });
  
        return next.handle(cloned);
      } else {
        return next.handle(req);
      }
    }
  

}

