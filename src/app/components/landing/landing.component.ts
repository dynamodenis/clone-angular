import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  currentUser: any;

  constructor(public authService: AuthService,) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit(): void {
  }

}
