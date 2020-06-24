import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TrialanswerService} from '../../services/trialanswer.service';
import {TrialquizService} from '../../services/trialquiz.service';
declare var $: any;

@Component({
  selector: 'app-trialtest',
  templateUrl: './trialtest.component.html',
  styleUrls: ['./trialtest.component.css']
})
export class TrialtestComponent implements OnInit {

  questionsArray:any[];
  answerArray:any[];
    constructor(private http: HttpClient, private questions:TrialquizService,private answer:TrialanswerService) { }
  
    ngOnInit() {
  
      this.questions.getTrialQuestions().subscribe(response => {
        // Succesful API request
        console.log(response)
        this.questionsArray=response.reduce(function(map, question) {
          
          map[question.id] = question.question;
          console.log(map,"map")
          return map;
        }, {});
      })
  
      this.answer.getTrialAnswers().subscribe(response => {
        // Succesful API request
        console.log(response)
        this.answerArray=response
        return this.answerArray
      })
    
  
  
  
  
      $(".q1").on('click', function () {
  
        $("#q3, #q2").hide();
        $("#q1").show();
    });
    $(".q2").on('click', function () {
  
        $("#q1, #q3").hide();
        $("#q2").show();
    });
    $(".q3").on('click', function () {
  
        $("#q1, #q2").hide();
        $("#q3").show();
    });
  
    }
  
  }
  
