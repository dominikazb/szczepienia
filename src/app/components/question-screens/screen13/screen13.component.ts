import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProcessVariablesService} from '../../shared/services/process-variables.service';
import {ResultsService} from '../../shared/results/results.service';
import {Router} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'screen13',
  templateUrl: './screen13.component.html'
})
export class Screen13Component implements OnInit {

  public answers: string[] = [];
  public question13 = '';
  public nextStepButtonText = '';
  // @ts-ignore
  public questionnaireForm: FormGroup;

  constructor(private processVariablesService: ProcessVariablesService,
              private resultsService: ResultsService,
              private router: Router) { }

  ngOnInit(): void {
    // @ts-ignore
    this.question13 = this.processVariablesService.questionnaireData[13].question;
    this.getPossibleAnswers();
    this.nextStepButtonText = this.processVariablesService.nextStepButtonText;
    this.buildForm();
  }

  getPossibleAnswers(): void {
    // @ts-ignore
    this.processVariablesService.questionnaireData[13].answers.forEach(
      (possibleAnswer: { answer: string; }) => this.answers.push(possibleAnswer.answer)
    );
  }

  private buildForm(): void {
    this.questionnaireForm = new FormGroup({
      yesNoAnswer: new FormControl(this.resultsService.results.answer13, Validators.required)
    });
  }

  public onSubmit(): void {
    this.resultsService.results.answer13 = this.questionnaireForm.value.yesNoAnswer;
    this.router.navigate(['/question14'], { skipLocationChange: true }).then(() => {});
  }

  public goBack(): void {
    this.router.navigate(['/question12'], { skipLocationChange: true }).then(() => {});
  }
}
