import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenInterceptorService} from '../../../services/helpers/token-interceptor.service';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-mentor-register',
  templateUrl: './mentor-register.component.html',
  styleUrls: ['./mentor-register.component.css']
})
export class MentorRegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private authService: AuthService,
    private tokenInterceptorService: TokenInterceptorService,
    private router: Router

  ) { }

  ngOnInit(){
    this.createForm();
  }

  get f(){return this.registerForm.controls;}

  private createForm(){
    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }


  register() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    const body = {
      user: this.registerForm.value
      
    }
    

    this.authService.registerMentor(body).subscribe(
      res => {
        localStorage.setItem('Token', res.user.token)
        this.router.navigate(['/login']);
        console.log(res)
        console.log(res.user.token)
      }
    )

    

    // this.authService.mentorRegister(body).subscribe((res) => {
    //   // tslint:disable-next-line: no-string-literal
    //   this.tokenInterceptorService.setToken(res['token']);
    //   this.router.navigate(['/login']);
    //   console.log(res);
    // });
    

    };

}