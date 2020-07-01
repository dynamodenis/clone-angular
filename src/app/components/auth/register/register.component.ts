import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InterceptorService } from '../../../services/interceptor.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');


  constructor(
    private authService: AuthService,
    private interceptorService: InterceptorService,
  ) { }

  ngOnInit(): void {
  }

  register() {
    const body = {
      username: this.username.value,
      email: this.email.value,
      password: this.password.value
    };

    this.authService.register(body).subscribe((res) => {
      // tslint:disable-next-line: no-string-literal
      this.interceptorService.setToken(res['token']);
    });
  }

}
