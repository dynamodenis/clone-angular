import { QuoteFormComponent } from './TM/quote-form/quote-form.component';
import { QuoteComponent } from './TM/quote/quote.component';
import { QuizScoresComponent } from './students/quizzes/quiz-scores/quiz-scores.component';
import { QuizzesComponent } from './students/quizzes/quizzes.component';
import { QuizListComponent } from './students/quizzes/quiz-list/quiz-list.component';
import { QuizDetailComponent } from './students/quizzes/quiz-detail/quiz-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'quote', component: QuoteComponent },

  {
    path: 'quizzes',
    component: QuizzesComponent,
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


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
