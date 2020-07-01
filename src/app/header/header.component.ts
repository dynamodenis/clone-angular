import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { EndpointsService } from '../services/endpoints.service';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: any;
  user;

  constructor( public authService: AuthService, private router: Router, public endpoints: EndpointsService, private http:HttpClient) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  
  }

  logout(){
      this.authService.logoutUser();
      this.router.navigate(['/login'])
  }

  ngOnInit(): void {
      this.authService.getUser().subscribe(res=>{
        this.user=res;
        console.log(this.user.user.is_mentor)
    });


    $(document).ready(
      function() {
        $('.menu-toggle').click(function() {
          $('nav').toggleClass('active')
        })
        $('ul li').click(function() {
          $(this).siblings().removeClass('active');
          $(this).toggleClass('active');
        })
      }
    )

  }

}