import { Injectable } from '@angular/core';
import {HttpClient }from '@angular/common/http';
import {Observable}from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrialanswerService {

 
  constructor(private http:HttpClient) { }

  getTrialAnswers():Observable<any>{
    return this.http.get<any>('http://127.0.0.1:8000/api/trial/answer/')
  }
}
