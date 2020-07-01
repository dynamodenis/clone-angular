import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndpointsService } from './endpoints.service';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService,
    private globalService: GlobalService
  ) { }

  getQuizzes() {
    return this.http.get(this.endpoints.quizzes());
  }
  setQuizzes(){
    return this.http.post(this.endpoints.quizzes(), {headers: this.globalService.headers()});
  }

  getQuiz(slug: string) {
    return this.http.get(this.endpoints.quiz(slug));
  }

  saveAnswer(body) {
    return this.http.patch(this.endpoints.saveAnswer(), body);
  }

  submitQuiz(body, slug) {
    return this.http.post(this.endpoints.submitQuiz(slug), body);
  }
clear(){
  // return this.http.post(this.endpoints.submitQuiz(''));

}
}
