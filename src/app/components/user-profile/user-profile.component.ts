import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, ParamMap,Params, Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import { EndpointsService } from '../../services/endpoints.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profile;
  picture;
  id:number
  token

  constructor(private endpointsService:EndpointsService,private route: ActivatedRoute, private router:Router,private authService:AuthService) { }

  onClick(id){
    this.router.navigate(['user/update',id])
  }


  ngOnInit(){
    

    let id = +this.route.snapshot.paramMap.get('id');

    this.endpointsService.getProfile().subscribe(res=>{
      this.profile=res;
      this.picture=this.endpointsService.profileUrl+this.profile.picture
      console.log(this.authService.getToken())
      
    })
  }
}