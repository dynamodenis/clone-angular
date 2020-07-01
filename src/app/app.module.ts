import { EndpointsService } from './services/endpoints.service';
import { AuthService } from './services/auth.service';
import { TokenInterceptorService} from './services/helpers/token-interceptor.service';
import { CookieService } from 'ngx-cookie-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, ɵHttpInterceptingHandler } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { QuestionComponent } from './students/quizzes/quiz-detail/question/question.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LandingComponent} from './components/landing/landing.component';
import { HeaderComponent } from './components/header/header.component';
import { QuiztestComponent } from './components/quiztest/quiztest.component';
import { QuestionComponent } from './components/question/question.component';
import { AnswerComponent } from './components/question/answer/answer.component';
import { LoginComponent } from './components/auth/login/login.component';
import { StudentRegisterComponent } from './components/auth/student-register/student-register.component';
import { MentorRegisterComponent } from './components/auth/mentor-register/mentor-register.component';
import { UpdateProfileComponent } from './components/user-profile/update-profile/update-profile.component';
import { AuthGuard } from './helpers/auth.guard';



import { GlobalService } from './services/global.service';
import { ProfileService } from './services/profile.service';
import { SetquizComponent } from './mentor/setquiz/setquiz.component';
import { UpdateProfileComponent } from './user-profile/update-profile/update-profile.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { QuoteComponent } from './TM/quote/quote.component';
import { QuoteDetailsComponent } from './TM/quote-details/quote-details.component';
import { QuoteFormComponent } from './TM/quote-form/quote-form.component';
import { QuizzesComponent } from './students/quizzes/quizzes.component';
import { QuizDetailComponent } from './students/quizzes/quiz-detail/quiz-detail.component';
import { QuizListComponent } from './students/quizzes/quiz-list/quiz-list.component';
import { QuizScoresComponent } from './students/quizzes/quiz-scores/quiz-scores.component';
import { AnswerComponent } from './students/quizzes/quiz-detail/question/answer/answer.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    QuestionComponent,
    UserProfileComponent,
    LoginComponent,
    StudentRegisterComponent,
    MentorRegisterComponent,
    LandingComponent,
    SetquizComponent,
    UpdateProfileComponent,
    PagenotfoundComponent,
    QuoteComponent,
    QuoteDetailsComponent,
    QuoteFormComponent,
    QuizzesComponent,
    QuizDetailComponent,
    QuizListComponent,
    QuizScoresComponent,
    AnswerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    EndpointsService,
    CookieService,
    AuthService,
    AuthGuard,
    GlobalService,
    CookieService,
    ProfileService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    AuthGuard,

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }