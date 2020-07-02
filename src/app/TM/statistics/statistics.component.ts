import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TrialService} from '../../services/trial.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  stats: any = [];
  scoresArray = [];
  quizArray = [];
  totaltests = [];
  totalstudents;
 
  passedArray = [];
  failedArray = [];
  noArray = [];
  allTimeP = [];
  allTimeF = [];
  allTimeN = [];
  constructor(
    private route: ActivatedRoute,
    private quizzesService: TrialService,
    private router: Router
  ) { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit() {
    this.quizzesService.stats().subscribe((res) => {
      this.stats = res
      for (let item of this.stats) {
        this.scoresArray.push([item.score, item.quiz, item.completed])
        this.quizArray.push(item.quiz)
      }
      console.log(this.stats,"stats")
      console.log(this.scoresArray,this.quizArray,"tester rr first")
  
      var obj = this.quizArray;

      var result = Object.values(obj.reduce((c, v) => {
        c[v] = c[v] || [v, 0];
        c[v][1]++;
        return c;
      }, {})).map(o => ({ [o[0]]: o[1] }))
      this.totaltests = result;
    
      console.log(this.totaltests,this.totaltests.length,"length")
      

      var arr = this.quizArray;

      function getOccurrence(array, value) {
        var count = 0;
        array.forEach((v) => (v === value && count++));
        return count;
      }

   

      for (let score = 0; score <= this.scoresArray.length-1; score++) {
        let counter = 0;
        let anotherArray;
        if (this.scoresArray[score][0] < 50 && this.scoresArray[score][3] == true && this.totaltests[score] == this.scoresArray[score][1]) {
          this.failedArray.push(counter)
          
          this.totalstudents = getOccurrence(arr, this.quizArray[score])
          // this.allTimeF.push((this.failedArray.length / this.totalstudents) )
          anotherArray.push((this.failedArray.length / this.totalstudents) )
          this.allTimeF=anotherArray

        }
        if (this.scoresArray[score][0] == 0 && this.scoresArray[score][3] == false && this.totaltests[score] == this.scoresArray[score][1]) {
          this.noArray.push(counter)
          
          this.totalstudents = getOccurrence(arr, this.quizArray[score])
          // this.allTimeN.push((this.noArray.length / this.totalstudents) )
          anotherArray.push((this.noArray.length / this.totalstudents) )
          this.allTimeN=anotherArray
        }

        if (this.scoresArray[score][0] > 50 && (this.scoresArray[score][1] == this.totaltests[score])) {
          this.passedArray.push(counter)
          this.totalstudents = getOccurrence(arr, this.quizArray[score])
          // this.allTimeP.push((this.passedArray.length / this.totalstudents))
          anotherArray.push((this.passedArray.length / this.totalstudents) )
         this.allTimeP=anotherArray
        }
       

      }
      
      this.passedArray
      this.allTimeP
      this.allTimeN
    
    console.log( this.failedArray,"farr")
      console.log(this.passedArray,"passed")
console.log(this.allTimeP,"tttttt" )
      

      console.log(this.quizArray, "quizarray")
      console.log(this.totaltests)

    });
   
  }

  public barChartLabels = Object.keys(this.totaltests);
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: this.allTimeP.push(this.passedArray), label: 'Passed' },
    { data: this.allTimeF.push(this.failedArray), label: 'Failed' },
    { data: this.allTimeN.push(this.noArray), label: 'NoAttempt' }
  ];
}