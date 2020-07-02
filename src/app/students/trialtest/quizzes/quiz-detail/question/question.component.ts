import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trial-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class TrialQuestionComponent implements OnInit {
  @Input()
  question;

  @Input()
  selectedAnswer;

  @Output()
  selectAnswer = new EventEmitter<any>()

  callParent(id: number) {
    this.selectAnswer.next(id);
  }

  constructor() { }

  ngOnInit() {
    console.log(this.question);
  }

}
