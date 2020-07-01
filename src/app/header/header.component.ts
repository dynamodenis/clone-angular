import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { EndpointsService } from '../services/endpoints.service';
<<<<<<< HEAD:src/app/components/header/header.component.ts
import { HttpClient } from '@angular/common/http';
=======
>>>>>>> 21b408b... fix differences in file structure:src/app/header/header.component.ts


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: any;
  user

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
}

}