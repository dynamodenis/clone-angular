import { QuizzesService } from './../../services/quizzes.service';
import { Quote } from 'src/app/quote';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  quizzes;
  newQuote = new Quote('', '', '', new Date());
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote() {
    this.addQuote.emit(this.newQuote);
  }
  constructor( private http: HttpClient, private quizzesService: QuizzesService) {

  }

  ngOnInit(): void {
    // this.quizzesService.setQuizzes().subscribe((data) => {
    //   this.quizzes = data;
    // });

  }
  }




