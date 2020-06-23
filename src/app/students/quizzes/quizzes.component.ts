import { QuizzesService } from './../../services/quizzes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

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
