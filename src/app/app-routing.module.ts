import { AuthGuardService } from './guards/auth-guard.service';
import { QuizzesComponent } from './students/quizzes/quizzes.component';
import { QuizListComponent } from './students/quizzes/quiz-list/quiz-list.component';
import { QuizDetailComponent } from './students/quizzes/quiz-detail/quiz-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'quizzes',
    component: QuizzesComponent,
    canActivate: [AuthGuardService],
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
