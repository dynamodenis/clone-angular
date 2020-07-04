import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authUrl = 'https://codemoschool.herokuapp.com/api/auth/'
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
    return localStorage.getItem('Bearer')
  }


  getUser(){
    return this.http.get<any>(this._authUrl + 'user/' )
  }

  updateUser(user){
    return this.http.put<any>(this._authUrl + 'user/' ,user)
  }
}
