
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
    return this.http.get(this.endpoints.tquizzes(), {headers: this.globalService.headers()});
  }

  getQuiz(slug: string) {
    return this.http.get(this.endpoints.tquiz(slug), {headers: this.globalService.headers()});
  }

  saveAnswer(body) {
    return this.http.patch(this.endpoints.tsaveAnswer(), body, {headers: this.globalService.headers()});
  }

  submitQuiz(body, slug) {
    return this.http.post(this.endpoints.tsubmitQuiz(slug), body, {headers: this.globalService.headers()});
  }
  stats() {
    return this.http.get(this.endpoints.stats(), {headers: this.globalService.headers()});
  }
}
