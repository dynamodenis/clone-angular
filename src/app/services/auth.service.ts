import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authUrl = 'http://127.0.0.1:8000/api/auth/'

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  registerMentor(user){
    return this.http.post<any>(this._authUrl + 'mentor/register/' , user)
  }

  registerStudent(user){
    return this.http.post<any>(this._authUrl + 'student/register/', user)
  }

  login(user){
    return this.http.post<any>(this._authUrl +'login/', user)
  }

  loggedIn(){
    return !!localStorage.getItem('Token')
  }

  logoutUser(){
    localStorage.removeItem('Token')
    this.router.navigate(['login'])
  }

  getToken(){
    return localStorage.getItem('Token')
  }


}