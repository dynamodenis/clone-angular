import { QuizService } from './../services/quiz.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.css']
})
export class QuizDetailComponent implements OnInit {
  slug;
  quiz: any;
  currentIndex = 0;
  selectedAnswer: number;
  answers = [];

  constructor(
    private route: ActivatedRoute,
    private quizzesService: QuizService,
    private router: Router) { }

  ngOnInit(): void {
    this.slug = this.route.snapshot.params.slug;
    // this.quizzesService.getQuiz(this.slug).subscribe((data) => {
    //   this.quiz = data.quiz;
    //   if (this.quiz.quiztakers_set.completed) {
    //     this.router.navigate(['/quizzes/' + this.slug + '/datault']);
    //   }
    //   this.initializeAnswers();
    // });
  }

  initializeAnswers() {
    const usersAnswers = this.quiz.quiztakers_set.usersanswer_set;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < usersAnswers.length; i++) {
      this.answers.push(usersAnswers[i].answer);
    }
    console.log(this.answers);
  }

  saveAnswer() {
    const body = {
      quiztaker: this.quiz.quiztakers_set.id,
      question: this.quiz.question_set[this.currentIndex].id,
      answer: this.selectedAnswer
    };

    // this.quizzesService.saveAnswer(body).subscribe((data) => {
      // console.log(data);
    // });
  }

  submitQuiz() {
    const body = {
      quiztaker: this.quiz.quiztakers_set.id,
      question: this.quiz.question_set[this.currentIndex].id,
      answer: this.selectedAnswer
    };

    // this.quizzesService.submitQuiz(body, this.slug).subscribe((data) => {
    //   this.router.navigate(['/quizzes/' + this.slug + '/datault']);
    // });
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
