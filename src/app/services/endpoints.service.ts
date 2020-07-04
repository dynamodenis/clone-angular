import { Injectable } from '@angular/core';
import { TokenInterceptorService} from './helpers/token-interceptor.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  apiHost = 'https://codemoschool.herokuapp.com/api/';
  profileUrl="https://codemoschool.herokuapp.com";


  constructor(private tokenInterceptorService: TokenInterceptorService,private http: HttpClient) { }


  // getProfile(id:number){
  //   // console.log(this.globalService.headers())
  //   return this.http.get(this.apiHost+'user/'+id+'/profile/')
  // }

  getProfile(){
    return this.http.get(this.apiHost+'user/profile/')
  }

  updateProfile(body){
    return this.http.put(this.apiHost+'user/profile/',body)
  }

  getMyQuizzes(){
    return this.http.get(this.apiHost+'my-quizzes/')
  }

  // Studeents questions
  quizzes() {
    return this.apiHost + 'quizzes/';
  }

  quiz(slug: string) {
    return this.apiHost + 'quizzes/' + slug + '/';
  }

  saveAnswer() {
    return this.apiHost + 'save-answer/';
  }

  submitQuiz(slug: string) {
    return this.apiHost + 'quizzes/' + slug + '/submit/';
  }
  addQuiz(slug: string) {
    return this.apiHost + 'quizzes/';
  }
  // tRial Page

  tquizzes() {
    return this.apiHost + 'trial/quizzes/';
  }

  tquiz(slug: string) {
    return this.apiHost + 'trial/quizzes/' + slug + "/";
  }

  tsaveAnswer() {
    return this.apiHost + 'trial/saveanswer/';
  }

  tsubmitQuiz(slug: string) {
    return this.apiHost + 'trial/quizzes/' + slug + "/submit/";
  }
  setTest(){
    
      return this.apiHost + 'trial/settest/' ;
  }
  stats(){
    
    return this.apiHost + 'trial/statistics/' ;
}
}
