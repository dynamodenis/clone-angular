import { TrialService } from '../../../../services/trial.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class TrialListComponent implements OnInit {
  quizzes;
  constructor(
    private quizzesService: TrialService
  ) { }

  ngOnInit(){
    this.quizzesService.getQuizzes().subscribe((res) => {
      this.quizzes = res;
    });
  }

}
