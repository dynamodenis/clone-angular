// import { GlobalService } from 'src/app/services/global.service';
// import { EndpointsService } from './endpoints.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient,
    // private endpoints: EndpointsService,
    // private globalService: GlobalService
    ) { }
  getQuizzes() {
    // return this.http.get(this.endpoints.quizzes(), {headers: this.globalService.headers()});
  }
}
