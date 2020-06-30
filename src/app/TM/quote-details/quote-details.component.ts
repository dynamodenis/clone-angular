import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from 'src/app/quote';

// import { EventEmitter } from 'protractor';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Output() isComplete = new EventEmitter<boolean>();


  deleteQuote(deleting: boolean) {
    this.isComplete.emit(deleting);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
