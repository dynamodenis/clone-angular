import { Component, OnInit } from '@angular/core';
import { QuizzesService } from 'src/app/services/quizzes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-scores',
  templateUrl: './quiz-scores.component.html',
  styleUrls: ['./quiz-scores.component.css']
})
export class QuizScoresComponent implements OnInit {
  results;

  constructor(
    private quizzesService: QuizzesService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    let slug=this.route.snapshot.params.slug;
    this.quizzesService.getSubmitQuiz(slug).subscribe(res=>{
      console.log(res)
      this.results=res
    })
  }

}
