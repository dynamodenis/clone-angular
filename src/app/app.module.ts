import { EndpointsService } from './services/endpoints.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { QuiztestComponent } from './components/quiztest/quiztest.component';
import { QuestionComponent } from './components/question/question.component';
import { AnswerComponent } from './components/question/answer/answer.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LandingComponent } from './dashboard/landing/landing.component';
import { GlobalService } from './services/global.service';
import { CookieService } from 'ngx-cookie-service';
import { ProfileService } from './services/profile.service';
import { SetquizComponent } from './mentor/setquiz/setquiz.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    QuiztestComponent,
    QuestionComponent,
    AnswerComponent,
    UserProfileComponent,
    LandingComponent,
    SetquizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    EndpointsService,
    GlobalService,
    CookieService,
    ProfileService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
