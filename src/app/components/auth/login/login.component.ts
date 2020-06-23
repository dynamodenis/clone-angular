import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InterceptorService } from '../../../services/interceptor.service';
import { EndpointsService} from '../../../services/endpoints.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('');
  password = new FormControl('');

  constructor(
    private authService: AuthService,
    private interceptorService: InterceptorService, ) { }

  login(){
    console.log('login button');
    const body = {
      user: {
        email: this.email.value,
        password: this.password.value

      }

    };

    this.authService.login(body).subscribe((res) => {
      // tslint:disable-next-line: no-string-literal
      this.interceptorService.setToken(res['token']);
      console.log(res);
    });
  }

  ngOnInit(): void {
  }

}
