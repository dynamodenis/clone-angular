import { Component, OnInit } from '@angular/core';
import { EndpointsService } from '../services/endpoints.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profile;

  constructor(private endPoints: EndpointsService, private route: ActivatedRoute ) { }

  ngOnInit(){

    // let id = +this.route.snapshot.paramMap.get('id');
    let id = 3;

    this.endPoints.getProfile(id).subscribe(
      res => this.profile = res

      )
  }

}
