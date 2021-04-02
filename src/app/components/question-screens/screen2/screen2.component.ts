import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProcessVariablesService} from '../../shared/services/process-variables.service';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';
import {ResultsService} from '../../shared/results/results.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.css']
})
export class Screen2Component implements OnInit {

  public years: number[] = [];
  public question2 = '';
  // @ts-ignore
  public questionnaireForm: FormGroup;

  constructor(private processVariablesService: ProcessVariablesService,
              private resultsService: ResultsService,
              private datePipe: DatePipe,
              private router: Router) { }

  ngOnInit(): void {
    // @ts-ignore
    this.question2 = this.processVariablesService.questions[1].question2;
    this.generateYears();
    this.buildForm();
  }

  private buildForm(): void {
    this.questionnaireForm = new FormGroup({
      yearOfBirth: new FormControl(this.defaultValue(), Validators.pattern('^[1-9][0-9]*$'))
    });
  }

  private defaultValue(): string {
    // @ts-ignore
    return this.resultsService.results.answer2 ? this.resultsService.results.answer2 : 0;
  }

  private generateYears(): void {
    // @ts-ignore
    const currentYear: number = parseInt(this.datePipe.transform(new Date(), 'yyyy'), 10);
    let year: number = currentYear;
    for (let i = currentYear; i >= 1930; i--) {
      this.years.push(year);
      year--;
    }
  }

  onSubmit(): void {
    this.resultsService.results.setAnswer2(this.questionnaireForm.value.yearOfBirth);
    this.router.navigate(['/question3']).then(() => {});
  }

  goBack(): void {
    this.router.navigate(['/questionnaire']).then(() => {});
  }
}
