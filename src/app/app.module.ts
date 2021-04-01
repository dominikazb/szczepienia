import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppStartComponent} from './components/app-start/app-start.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ResultsService} from './components/shared/results/results.service';
import {Results} from './components/shared/results/results';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AppStartComponent,
    FooterComponent,
    HeaderComponent,
    Screen1Component,
    Screen2Component,
    Screen3Component,
    Screen4Component,
    Screen5Component,
    Screen6Component,
    Screen7Component,
    Screen8Component,
    Screen9Component,
    Screen10Component,
    Screen11Component,
    Screen12Component
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe, ResultsService, Results],
  bootstrap: [AppComponent]
})
export class AppModule { }
