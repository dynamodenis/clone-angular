import { TeacherServiceService } from './teacher/service/teacher-service.service';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProblemQuestionComponent } from './teacher/problem-question/problem-question.component';
import { AnswersComponent } from './teacher/answers/answers.component';
import { FeedbackComponent } from './teacher/feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    ProblemQuestionComponent,
    AnswersComponent,
    FeedbackComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [
    TeacherServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
