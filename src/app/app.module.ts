import { EndpointsService } from './services/endpoints.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { QuiztestComponent } from './components/quiztest/quiztest.component';
import { QuestionComponent } from './components/question/question.component';
import { AnswerComponent } from './components/question/answer/answer.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TrialtestComponent } from './components/trialtest/trialtest.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    QuiztestComponent,
    QuestionComponent,
    AnswerComponent,
    UserProfileComponent,
    TrialtestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    EndpointsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
