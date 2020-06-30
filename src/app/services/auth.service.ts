import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalService } from './global.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authUrl = 'http://127.0.0.1:8000/api/auth/'
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;


  constructor(
    private http: HttpClient,
  ) { 
    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('Bearer'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  registerMentor(user){
    return this.http.post<any>(this._authUrl + 'mentor/register/' , user)
  }

  registerStudent(user){
    return this.http.post<any>(this._authUrl + 'student/register/', user)
  }

  public get currentUserValue(){
    return this.currentUserSubject.value;
  }

  login(body){
    return this.http.post<any>(this._authUrl +'login/', body).pipe(map(userInfo => {
      let token =  userInfo.access
      localStorage.setItem('Bearer', token);
      this.currentUserSubject.next(userInfo);
      return userInfo
    }));
  }


  loggedIn(){
    return !!localStorage.getItem('Bearer')
  }

  logoutUser(){
    localStorage.removeItem('Bearer')
    this.currentUserSubject.next(null);
  }

  getToken(){
    // console.log(localStorage.getItem('Bearer'))
    return localStorage.getItem('Bearer')
  }
}
