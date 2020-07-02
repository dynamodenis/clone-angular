import { GlobalService } from 'src/app/services/global.service';
import { EndpointsService } from './endpoints.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class  TrialService  {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService,
    private globalService: GlobalService
  ) { }

  getQuizzes() {
    return this.http.get(this.endpoints.tquizzes());
  }

  getQuiz(slug: string) {
    return this.http.get(this.endpoints.tquiz(slug));
  }

  saveAnswer(body) {
    return this.http.patch(this.endpoints.tsaveAnswer(), body);
  }

  submitQuiz(body, slug:string) {
    return this.http.post(this.endpoints.tsubmitQuiz(slug), body);
  }
  stats() {
    return this.http.get(this.endpoints.stats());
  }
}
