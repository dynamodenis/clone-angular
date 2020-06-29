import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    ) { 
      // if (this.authService.currentUserValue) { 
      //   this.router.navigate(['dashboard']);
      // }
    }

  ngOnInit(){
    this.createForm();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'dashboard';
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

    this.authService.login(body).subscribe(
      res => {
        localStorage.setItem('Bearer', res.user.token)
        this.router.navigate([this.returnUrl]);
        console.log(res)
        console.log(res.user.token)
      }
    )

  }

}
