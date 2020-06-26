import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-setquiz',
  templateUrl: './setquiz.component.html',
  styleUrls: ['./setquiz.component.css']
})
export class SetquizComponent implements OnInit {
  quiz=new FormControl('');
  question=new FormControl('');
  answer1=new FormControl('');
  answer2=new FormControl('');
  answer3=new FormControl('');
  answer4=new FormControl('');
  answer5=new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
