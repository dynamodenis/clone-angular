import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import {  ActivatedRoute, ParamMap,Params } from '@angular/router';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profile;
  id:number

  constructor(private profileService:ProfileService,private route: ActivatedRoute, private globalService:GlobalService) { }

  ngOnInit(){
    
    // this.id = +this.route.paramMap.subscribe((params:Params)=>{
    //   this.id=+params.get('id')
    //   this.profileService.getProfile(this.id).subscribe((res)=>{
    //   this.profile=res;
    //   console.log(this.id)
    // })
    // })

    let id = +this.route.snapshot.paramMap.get('id');

    this.profileService.getProfile(id).subscribe((res)=>{
      this.globalService.setToken(res['token']);
      this.profile=res;

    })
  }
}

