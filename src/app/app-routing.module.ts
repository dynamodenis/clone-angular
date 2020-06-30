import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/helpers/auth.guard';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MentorRegisterComponent} from './components/auth/mentor-register/mentor-register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { StudentRegisterComponent } from './components/auth/student-register/student-register.component';
import { QuestionComponent } from './components/question/question.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LandingComponent } from './dashboard/landing/landing.component';


const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: MentorRegisterComponent},
  { path: 'user/register', component: StudentRegisterComponent},
  { path: 'login', component: LoginComponent },
  { path: 'challenge', component: QuestionComponent, canActivate:[AuthGuard]},
  { path:'user', component: UserProfileComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
