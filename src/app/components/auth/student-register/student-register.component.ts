import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TokenInterceptorService } from '../../../services/token-interceptor.service';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {
  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');

  constructor(
    private authService: AuthService,
    private tokenInterceptorService: TokenInterceptorService,
  ) { }

  ngOnInit(): void {
  }

  register() {
    const body = {
      user: {
        username: this.username.value,
        email: this.email.value,
        password: this.password.value

      }

    };

    this.authService.studentRegister(body).subscribe((res) => {
      // tslint:disable-next-line: no-string-literal
      this.tokenInterceptorService.setToken(res['token']);
      console.log(res);
    });
  }

}
