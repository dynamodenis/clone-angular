import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../../services/global.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
})
export class TrialComponent implements OnInit {

  constructor(public authService: AuthService, public globalService:GlobalService) { }

  ngOnInit(): void {
  }

}
