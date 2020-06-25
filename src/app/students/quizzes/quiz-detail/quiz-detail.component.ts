import { QuizzesService } from './../../../services/quizzes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.css']
})
export class QuizDetailComponent implements OnInit {

  slug;
  quiz: any;
  // tslint:disable-next-line: no-inferrable-types
  currentIndex: number = 0;
  selectedAnswer: number;
  answers = [];

  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'Your results will be sent via Email!';
  }
  constructor(
    private route: ActivatedRoute,
    private quizzesService: QuizzesService,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.slug = this.route.snapshot.params.slug;
    this.quizzesService.getQuiz(this.slug).subscribe((res) => {
      // tslint:disable-next-line: no-string-literal
      this.quiz = res['quiz'];
      if (this.quiz.quiztakers_set.completed) {
        this.router.navigate(['/quizzes/' + this.slug + '/result']);
      }
      this.initializeAnswers();
    });
  }

  initializeAnswers() {
    const usersAnswers = this.quiz.quiztakers_set.usersanswer_set;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < usersAnswers.length; i++) {
      // tslint:disable-next-line: no-string-literal
      this.answers.push(usersAnswers[i]['answer']);
    }
    console.log(this.answers);
  }

  saveAnswer() {
    const body = {
      // tslint:disable-next-line: object-literal-key-quotes
      'quiztaker': this.quiz.quiztakers_set.id,
      // tslint:disable-next-line: object-literal-key-quotes
      'question': this.quiz.question_set[this.currentIndex].id,
      // tslint:disable-next-line: object-literal-key-quotes
      'answer': this.selectedAnswer
    };

    this.quizzesService.saveAnswer(body).subscribe((res) => {
      console.log(res);
    });
  }

  submitQuiz() {
    const body = {
      // tslint:disable-next-line: object-literal-key-quotes
      'quiztaker': this.quiz.quiztakers_set.id,
      // tslint:disable-next-line: object-literal-key-quotes
      'question': this.quiz.question_set[this.currentIndex].id,
      // tslint:disable-next-line: object-literal-key-quotes
      'answer': this.selectedAnswer
    };

    this.quizzesService.submitQuiz(body, this.slug).subscribe((res) => {
      this.router.navigate(['/quizzes/' + this.slug + '/result']);
    });
  }

  next() {
    if (this.currentIndex === this.quiz.question_set.length - 1) {
      this.submitQuiz();
      return;
    }

    if (this.selectedAnswer != null) {
      this.saveAnswer();
    }

    if (this.currentIndex !== this.quiz.question_set.length - 1) {
      this.currentIndex += 1;
      this.selectedAnswer = null;
    }
  }

  selectAnswer(id: number) {
    console.log(id);
    this.selectedAnswer = id;
    this.answers[this.currentIndex] = id;
  }

  previous() {
    if (this.selectedAnswer != null) {
      this.saveAnswer();
    }

    // tslint:disable-next-line: triple-equals
    if (this.currentIndex != 0) {
      this.currentIndex -= 1;
      this.selectedAnswer = null;
    }
  }

}

