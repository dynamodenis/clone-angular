import { Quote } from 'src/app/quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
  ];

  addAQuote(quote) {
    quote.Date = new Date(quote.Date);
    this.quotes.push(quote);
  }
  deletingQuote(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`);

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}

