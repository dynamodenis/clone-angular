import { Component, OnInit } from '@angular/core';
import { EndpointsService } from '../services/endpoints.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private endPoints: EndpointsService, private route: ActivatedRoute ) { }

  ngOnInit(){

    let id = +this.route.snapshot.paramMap.get('id');

    this.endPoints.getProfile(id).subscribe((res)=>{
      console.log(res)
      // this.profile=res;

    })
  }

}
