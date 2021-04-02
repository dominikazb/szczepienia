import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProcessVariablesService} from '../../shared/services/process-variables.service';
import {ResultsService} from '../../shared/results/results.service';
import {Router} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'screen14',
  templateUrl: './screen14.component.html'
})
export class Screen14Component implements OnInit {

  public answers: string[] = [];
  public question14 = '';
  public nextStepButtonText = '';
  // @ts-ignore
  public questionnaireForm: FormGroup;

  constructor(private processVariablesService: ProcessVariablesService,
              private resultsService: ResultsService,
              private router: Router) { }

  ngOnInit(): void {
    // @ts-ignore
    this.question14 = this.processVariablesService.questionnaireData[14].question;
    this.getPossibleAnswers();
    this.nextStepButtonText = this.processVariablesService.nextStepButtonText;
    this.buildForm();
  }

  getPossibleAnswers(): void {
    // @ts-ignore
    this.processVariablesService.questionnaireData[14].answers.forEach(
      (possibleAnswer: { answer: string; }) => this.answers.push(possibleAnswer.answer)
    );
  }

  private buildForm(): void {
    this.questionnaireForm = new FormGroup({
      yesNoAnswer: new FormControl(this.resultsService.results.answer14, Validators.required)
    });
  }

  public onSubmit(): void {
    this.resultsService.results.answer14 = this.questionnaireForm.value.yesNoAnswer;
    this.router.navigate(['/question10']).then(() => {});
  }

  public goBack(): void {
    this.router.navigate(['/question8']).then(() => {});
  }
}
