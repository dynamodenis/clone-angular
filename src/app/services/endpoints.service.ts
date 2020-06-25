import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor(
      private globalService: GlobalService
  ) { }

  quizzes() {
    return this.globalService.apiHost + 'quizzes/';
  }

  quiz(slug: string) {
    return this.globalService.apiHost + 'quizzes/' + slug + '/';
  }

  saveAnswer() {
    return this.globalService.apiHost + 'save-answer/';
  }

  submitQuiz(slug: string) {
    return this.globalService.apiHost + 'quizzes/' + slug + '/submit/';
  }
}
