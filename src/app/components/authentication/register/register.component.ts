import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthenticationService]
})
export class RegisterComponent implements OnInit {

  register: any;

  constructor(private authService:AuthenticationService) { }

  ngOnInit() {
    this.register = {
      username: '',
      email:'',
      password: ''
    };
  }

  registerUser(){
    this.authService.registerUser(this.register).subscribe(
      response => {
        console.log("User" + this.register.username + "has been created")
      },
      error => console.log('error', error)
    )

  }


}
