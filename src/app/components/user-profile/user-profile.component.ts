import { Component, OnInit } from '@angular/core';
import { EndpointsService } from '../../services/endpoints.service';
import { ActivatedRoute } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  profile;
  id;

  constructor(private endPoints: EndpointsService, private route: ActivatedRoute ) { }

  ngOnInit(){
    this.route.params.subscribe(params => {
      // get the username out of the route params
      const id = params['id'];
      this.endPoints.getProfile(id).subscribe(id => this.id = id)
      // this.id = params['id'];
  
      // now we can go grab user data from github    
    })

    // let id = +this.route.snapshot.paramMap.get('id');
    // let id = 3;

    // this.endPoints.getProfile(id).subscribe(
    //   res => this.profile = res

    //   )
  }

}
