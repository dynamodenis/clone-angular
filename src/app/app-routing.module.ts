import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './helpers/auth.guard';


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MentorRegisterComponent} from './components/auth/mentor-register/mentor-register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { StudentRegisterComponent } from './components/auth/student-register/student-register.component';
import { QuestionComponent } from './components/question/question.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LandingComponent } from './components/landing/landing.component';


const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: MentorRegisterComponent},
  { path: 'user/register', component: StudentRegisterComponent},
  { path: 'login', component: LoginComponent },
  { path: 'challenge', component: QuestionComponent, canActivate:[AuthGuard]},
  { path: 'challenge', component: QuestionComponent},
  { path:'user', component: UserProfileComponent, canActivate:[AuthGuard]},
  // { path:'user', component: UserProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
