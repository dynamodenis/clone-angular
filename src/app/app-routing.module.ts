import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './services/helpers/auth.guard';


import { DashboardComponent } from './dashboard/dashboard.component';
import { MentorRegisterComponent} from './components/auth/mentor-register/mentor-register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { StudentRegisterComponent } from './components/auth/student-register/student-register.component';



const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate:[AuthGuard]},
  { path: 'register', component: MentorRegisterComponent},
  { path: 'user/register', component: StudentRegisterComponent},
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
