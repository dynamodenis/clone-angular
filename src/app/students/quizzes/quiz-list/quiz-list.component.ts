import { QuizzesService } from './../../../services/quizzes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quizzes;
  constructor(
    private quizzesService: QuizzesService
  ) { }

  ngOnInit(): void {
    this.quizzesService.getQuizzes().subscribe((data) => {
      this.quizzes = data;
    });

}
}
