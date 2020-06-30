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
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { 
  }
  registerMentor(user){
    return this.http.post<any>(this._authUrl + 'mentor/register/' , user)
  }
  registerStudent(user){
    return this.http.post<any>(this._authUrl + 'student/register/', user)
  }
  login(user){
    return this.http.post<any>(this._authUrl + 'login/', user)
  }

  getUser(){
    return this.http.get<any>(this._authUrl + 'user/')
  }

  updateUser(user){
    return this.http.get<any>(this._authUrl + 'user/',user)
  }

  loggedIn(){
    return !!localStorage.getItem('Token')
  }
  logoutUser(){
    localStorage.removeItem('Bearer')
    // this.currentUserSubject.next(null);
  }
  getToken(){
    // console.log(localStorage.getItem('Bearer'))
    return localStorage.getItem('Bearer')
  }
}
