import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/helpers/auth.guard';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MentorRegisterComponent} from './components/auth/mentor-register/mentor-register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { StudentRegisterComponent } from './components/auth/student-register/student-register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LandingComponent } from './dashboard/landing/landing.component';
import { UpdateProfileComponent } from './user-profile/update-profile/update-profile.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { QuoteFormComponent } from './TM/quote-form/quote-form.component';
import { QuoteComponent } from './TM/quote/quote.component';
import { QuizScoresComponent } from './students/quizzes/quiz-scores/quiz-scores.component';
import { QuizzesComponent } from './students/quizzes/quizzes.component';
import { QuizListComponent } from './students/quizzes/quiz-list/quiz-list.component';
import { QuizDetailComponent } from './students/quizzes/quiz-detail/quiz-detail.component';
import { TrialComponent } from './students/trialtest/quizzes/quizzes.component';
import { TrialListComponent } from './students/trialtest/quizzes/quiz-list/quiz-list.component';
import { TrialDetailComponent } from './students/trialtest/quizzes/quiz-detail/quiz-detail.component';
import { QuizResultComponent } from './students/trialtest/quizzes/quiz-result/quiz-result.component';



const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  { path: 'register', component: LandingComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  { path: 'register/mentor', component: MentorRegisterComponent},
  { path: 'register/user', component: StudentRegisterComponent},
  { path: 'login', component: LoginComponent },
  { path:'user', component: UserProfileComponent, canActivate:[AuthGuard]},
  { path:'user/update', component: UpdateProfileComponent, canActivate:[AuthGuard]},
  // Qusetions and answers
  { path: 'test', component: QuoteComponent },

  {
    path: 'quizzes',
    component: QuizzesComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
      },
      {
        path: 'all',
        component: QuizListComponent
      },
      {
        path: ':slug',
        component: QuizDetailComponent
      },
      {
        path: ':slug/result',
        component: QuizScoresComponent
      }
    ]
  },
  // Trial Tests
  {
    path: 'trial',
    component: TrialComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
      },
      {
        path: 'all',
        component: TrialListComponent
      },
      {
        path: ':slug',
        component: TrialDetailComponent
      },
      {
        path: ': slug/result',
        component:QuizResultComponent
      }
    ]
  },

  { path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
