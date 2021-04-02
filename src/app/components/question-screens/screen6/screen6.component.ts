import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ProcessVariablesService} from '../../shared/services/process-variables.service';
import {ResultsService} from '../../shared/results/results.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'screen6',
  templateUrl: './screen6.component.html'
})
export class Screen6Component implements OnInit {

  public answers: string[] = [];
  public question6 = '';
  public nextStepButtonText = '';
  // @ts-ignore
  public questionnaireForm: FormGroup;

  constructor(private processVariablesService: ProcessVariablesService,
              private resultsService: ResultsService,
              private router: Router) { }

  ngOnInit(): void {
    // @ts-ignore
    this.question6 = this.processVariablesService.questions[5].question6;
    this.getPossibleAnswers();
    this.nextStepButtonText = this.processVariablesService.nextStepButtonText;
    this.buildForm();
  }

  getPossibleAnswers(): void {
    // @ts-ignore
    this.processVariablesService.questions[5].answers.forEach(
        (possibleAnswer: { answer: string; }) => this.answers.push(possibleAnswer.answer)
    );
  }

  private buildForm(): void {
    this.questionnaireForm = new FormGroup({
      yesNoAnswer: new FormControl(this.resultsService.results.answer6, Validators.required)
    });
  }

  public onSubmit(): void {
    this.resultsService.results.setAnswer6(this.questionnaireForm.value.yesNoAnswer);
    this.router.navigate(['/question7']).then(() => {});
  }

  public goBack(): void {
    this.router.navigate(['/question5']).then(() => {});
  }
}
