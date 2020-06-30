import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  currentUser: any;

  constructor(public authService: AuthService, private router: Router) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
    if (this.authService.currentUserValue) { 
      this.router.navigate(['dashboard']);
    }
   }

  ngOnInit(): void {
  }

}
