import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProcessVariablesService} from '../../shared/services/process-variables.service';
import {ResultsService} from '../../shared/results/results.service';
import {Router} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'screen8',
  templateUrl: './screen8.component.html'
})
export class Screen8Component implements OnInit {

  public answers: string[] = [];
  public question8 = '';
  public nextStepButtonText = '';
  // @ts-ignore
  public questionnaireForm: FormGroup;

  constructor(private processVariablesService: ProcessVariablesService,
              private resultsService: ResultsService,
              private router: Router) { }

  ngOnInit(): void {
    // @ts-ignore
    this.question8 = this.processVariablesService.questions[7].question8;
    this.getPossibleAnswers();
    this.nextStepButtonText = this.processVariablesService.nextStepButtonText;
    this.buildForm();
  }

  getPossibleAnswers(): void {
    // @ts-ignore
    this.processVariablesService.questions[7].answers.forEach(
      (possibleAnswer: { answer: string; }) => this.answers.push(possibleAnswer.answer)
    );
  }

  private buildForm(): void {
    this.questionnaireForm = new FormGroup({
      yesNoAnswer: new FormControl(this.resultsService.results.answer8, Validators.required)
    });
  }

  public onSubmit(): void {
    this.resultsService.results.setAnswer8(this.questionnaireForm.value.yesNoAnswer);
    this.router.navigate(['/question9']).then(() => {});
  }

  public goBack(): void {
    this.router.navigate(['/question7']).then(() => {});
  }
}
