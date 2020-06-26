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


  constructor(private endPoints: EndpointsService, private route: ActivatedRoute ) { }

  ngOnInit(){
   
    }
}


