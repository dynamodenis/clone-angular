import { QuizzesService } from './services/quizzes.service';
import { EndpointsService } from './services/endpoints.service';
import { CookieService } from 'ngx-cookie-service';
import { GlobalService } from 'src/app/services/global.service';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import {MatFormFieldModule} from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizzesComponent } from './students/quizzes/quizzes.component';
import { QuizListComponent } from './students/quizzes/quiz-list/quiz-list.component';
import { QuizDetailComponent } from './students/quizzes/quiz-detail/quiz-detail.component';
import { QuestionComponent } from './students/quizzes/quiz-detail/question/question.component';
import { AnswerComponent } from './students/quizzes/quiz-detail/question/answer/answer.component';
import { QuizScoresComponent } from './students/quizzes/quiz-scores/quiz-scores.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuizzesComponent,
    QuizListComponent,
    QuizDetailComponent,
    QuestionComponent,
    AnswerComponent,
    QuizScoresComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // MatSnackBarModule,
    // MatFormFieldModule
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // MatSnackBarModule,
    // MatFormFieldModule
  ],

  providers: [
    GlobalService,
    CookieService,
    QuizzesService,
    EndpointsService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
