import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, ParamMap,Params } from '@angular/router';
import { GlobalService } from '../services/global.service';
import { EndpointsService } from '../services/endpoints.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profile;
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

