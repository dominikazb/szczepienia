import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProcessVariablesService} from '../../shared/services/process-variables.service';
import {ResultsService} from '../../shared/results/results.service';
import {Router} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'screen7',
  templateUrl: './screen7.component.html'
})
export class Screen7Component implements OnInit {

  public answers: string[] = [];
  public question7 = '';
  public nextStepButtonText = '';
  // @ts-ignore
  public questionnaireForm: FormGroup;

  constructor(private processVariablesService: ProcessVariablesService,
              private resultsService: ResultsService,
              private router: Router) { }

  ngOnInit(): void {
    // @ts-ignore
    this.question7 = this.processVariablesService.questions[6].question7;
    this.getPossibleAnswers();
    this.nextStepButtonText = this.processVariablesService.nextStepButtonText;
    this.buildForm();
  }

  getPossibleAnswers(): void {
    // @ts-ignore
    this.processVariablesService.questions[6].answers.forEach(
      (possibleAnswer: { answer: string; }) => this.answers.push(possibleAnswer.answer)
    );
  }

  private buildForm(): void {
    this.questionnaireForm = new FormGroup({
      yesNoAnswer: new FormControl(this.resultsService.results.answer7, Validators.required)
    });
  }

  public onSubmit(): void {
    this.resultsService.results.setAnswer7(this.questionnaireForm.value.yesNoAnswer);
    this.router.navigate(['/question8']).then(() => {});
  }

  public goBack(): void {
    this.router.navigate(['/question6']).then(() => {});
  }
}
