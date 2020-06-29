import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TokenInterceptorService } from '../../../services/helpers/token-interceptor.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private authService: AuthService,
    private tokenInterceptorService: TokenInterceptorService, 
    private router: Router
    ) { }

  ngOnInit(){
    this.createForm();
  }

  get f() { return this.loginForm.controls; }

  private createForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  login() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const body = {
      user: this.loginForm.value
    };

    // this.authService.login(body).subscribe((res) => {
    //   // tslint:disable-next-line: no-string-literal
    //   this.tokenInterceptorService.setToken(res['token']);
    //   this.router.navigate(['/']);
    //   console.log(res);
    // });
    this.authService.login(body).subscribe(
      res => {
        localStorage.setItem('Token', res.user.token)
        this.router.navigate(['/']);
        // console.log(res)
        console.log(res.user.token)
      }
    )

  }

}
