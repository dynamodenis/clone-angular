import { Component, OnInit } from '@angular/core';
import {GlobalService} from '../../../services/global.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss']
})
export class QuizResultComponent implements OnInit {

  constructor(public globalService:GlobalService,
    private route: ActivatedRoute,
    private router: Router) { }
    
    logout(){
      var cookies = document.cookie.split(";");

      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i];
          var eqPos = cookie.indexOf("=");
          var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
 
      this.router.navigate(['/auth']);
    }
  ngOnInit() {
  }

}
