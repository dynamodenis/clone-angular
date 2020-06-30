import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {  ActivatedRoute, ParamMap,Params, Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';
import { EndpointsService } from '../../services/endpoints.service';
import { AuthService } from '../../services/auth.service';
=======
import {  ActivatedRoute, ParamMap,Params } from '@angular/router';
import { GlobalService } from '../services/global.service';
import { EndpointsService } from '../services/endpoints.service';
>>>>>>> 7ed7eb7... Feature/user profile (#5)

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profile;
<<<<<<< HEAD
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
=======
  id:number

  constructor(private endpointsService:EndpointsService,private route: ActivatedRoute, private globalService:GlobalService) { }

  ngOnInit(){
    
    // this.id = +this.route.paramMap.subscribe((params:Params)=>{
    //   this.id=+params.get('id')
    //   this.profileService.getProfile(this.id).subscribe((res)=>{
    //   this.profile=res;
    //   console.log(this.id)
    // })
    // })

    let id = +this.route.snapshot.paramMap.get('id');

    this.endpointsService.getProfile(id).subscribe(res=>{
      // localStorage.setItem('Token', res.user.token)
      console.log(res)
      this.profile=res;

    })
  }
}

>>>>>>> 7ed7eb7... Feature/user profile (#5)
