import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EndpointsService } from 'src/app/services/endpoints.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  updateForm= new FormGroup({
    bio:new FormControl(''),
    location:new FormControl(''),
    education:new FormControl(''),
  })
  profile: Object;

  constructor(private endpointsService:EndpointsService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');

    this.endpointsService.getProfile(id).subscribe(res=>{
      // localStorage.setItem('Token', res.user.token)
      console.log(res)
      this.profile=res;

    this.updateForm.patchValue({
      bio:this.profile['bio'],
      location:this.profile['location'],
      education:this.profile['education'],
    })
  })
}
}
