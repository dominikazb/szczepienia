import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppStartComponent} from './components/app-start/app-start.component';
import {Screen1Component} from './components/question-screens/screen1/screen1.component';
import {Screen2Component} from './components/question-screens/screen2/screen2.component';
import {Screen3Component} from './components/question-screens/screen3/screen3.component';
import {Screen4Component} from './components/question-screens/screen4/screen4.component';
import {Screen5Component} from './components/question-screens/screen5/screen5.component';
import {Screen6Component} from './components/question-screens/screen6/screen6.component';
import {Screen7Component} from './components/question-screens/screen7/screen7.component';
import {Screen8Component} from './components/question-screens/screen8/screen8.component';
import {Screen9Component} from './components/question-screens/screen9/screen9.component';
import {Screen10Component} from './components/question-screens/screen10/screen10.component';
import {Screen11Component} from './components/question-screens/screen11/screen11.component';
import {Screen12Component} from './components/question-screens/screen12/screen12.component';
import {Screen13Component} from './components/question-screens/screen13/screen13.component';
import {Screen14Component} from './components/question-screens/screen14/screen14.component';
import {ResultsComponent} from './components/results/results.component';

const routes: Routes = [
  {path: '', component: AppStartComponent},
  {path: 'questionnaire', component: Screen1Component},
  {path: 'question2', component: Screen2Component},
  {path: 'question3', component: Screen3Component},
  {path: 'question4', component: Screen4Component},
  {path: 'question5', component: Screen5Component},
  {path: 'question6', component: Screen6Component},
  {path: 'question7', component: Screen7Component},
  {path: 'question8', component: Screen8Component},
  {path: 'question9', component: Screen9Component},
  {path: 'question10', component: Screen10Component},
  {path: 'question11', component: Screen11Component},
  {path: 'question12', component: Screen12Component},
  {path: 'question13', component: Screen13Component},
  {path: 'question14', component: Screen14Component},
  {path: 'results', component: ResultsComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
