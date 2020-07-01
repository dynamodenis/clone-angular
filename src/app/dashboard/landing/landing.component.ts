import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';


=======
>>>>>>> 7ed7eb7... Feature/user profile (#5)

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
<<<<<<< HEAD
  currentUser: any;

  constructor(public authService: AuthService, private router: Router) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
    if (this.authService.currentUserValue) { 
      this.router.navigate(['dashboard']);
    }
   }
=======

  constructor() { }
>>>>>>> 7ed7eb7... Feature/user profile (#5)

  ngOnInit(): void {
  }

}
