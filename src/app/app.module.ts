import { EndpointsService } from './services/endpoints.service';
import { AuthService } from './services/auth.service';
import { TokenInterceptorService} from './helpers/token-interceptor.service';

import { CookieService } from 'ngx-cookie-service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, ɵHttpInterceptingHandler } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LandingComponent} from './components/landing/landing.component';
import { HeaderComponent } from './components/header/header.component';
import { QuiztestComponent } from './components/quiztest/quiztest.component';
import { QuestionComponent } from './components/question/question.component';
import { AnswerComponent } from './components/question/answer/answer.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LoginComponent } from './components/auth/login/login.component';
import { StudentRegisterComponent } from './components/auth/student-register/student-register.component';
import { MentorRegisterComponent } from './components/auth/mentor-register/mentor-register.component';
import { UpdateProfileComponent } from './components/user-profile/update-profile/update-profile.component';
import { AuthGuard } from './helpers/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    QuiztestComponent,
    QuestionComponent,
    AnswerComponent,
    UserProfileComponent,
    LoginComponent,
    StudentRegisterComponent,
    MentorRegisterComponent,
    LandingComponent,
    UpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    EndpointsService,
    CookieService,
    AuthService,
    EndpointsService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
