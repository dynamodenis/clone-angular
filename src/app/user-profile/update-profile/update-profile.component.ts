import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EndpointsService } from 'src/app/services/endpoints.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


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
    company:new FormControl(''),
    // picture: new FormControl('')
  })

  // PROPERTIES USED
  profile;
  mentor:Boolean;
  user;

  constructor(private endpointsService:EndpointsService,private route: ActivatedRoute,private router:Router,private authService:AuthService) { }

  // GOES BACK TO THE PROFILE
  toProfile(){
    this.router.navigate(['user'])
  }
  // ONSUBMIT FORM
  updateProfile(){
    this.endpointsService.updateProfile(this.updateForm.value).subscribe(res=>{
      this.router.navigate(['/user']);
    })
  }


  // ON PAGE LOAD
  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');

    this.endpointsService.getProfile().subscribe(res=>{
      // localStorage.setItem('Token', res.user.token)
      this.profile=res;
      this.mentor=this.profile['user'].is_mentor
      console.log(this.mentor)

    // this.authService.getUser().subscribe(res=>{
    //   this.user=res
    // })

    this.updateForm.patchValue({
      bio:this.profile['bio'],
      location:this.profile['location'],
      education:this.profile['education'],
      company:this.profile['company'],
    })
  })

  // ON SUBMIT FORM
}
}
