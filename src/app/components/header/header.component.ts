import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { EndpointsService } from '../../services/endpoints.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: any;

  constructor( public authService: AuthService, private router: Router, public endpoints: EndpointsService) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  
   }

  logout(){
    this.authService.logoutUser();
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
  }

}
