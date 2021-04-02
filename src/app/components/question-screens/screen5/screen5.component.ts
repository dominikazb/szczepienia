import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ProcessVariablesService} from '../../shared/services/process-variables.service';
import {ResultsService} from '../../shared/results/results.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'screen5',
  templateUrl: './screen5.component.html'
})
export class Screen5Component implements OnInit {

  public answers: string[] = [];
  public question5 = '';
  public nextStepButtonText = '';
  // @ts-ignore
  public questionnaireForm: FormGroup;

  constructor(private processVariablesService: ProcessVariablesService,
              private resultsService: ResultsService,
              private router: Router) { }

  ngOnInit(): void {
    // @ts-ignore
    this.question5 = this.processVariablesService.questionnaireData[5].question;
    this.getPossibleAnswers();
    this.nextStepButtonText = this.processVariablesService.nextStepButtonText;
    this.buildForm();
  }

  getPossibleAnswers(): void {
    // @ts-ignore
    this.processVariablesService.questionnaireData[5].answers.forEach(
        (possibleAnswer: { answer: string; }) => this.answers.push(possibleAnswer.answer)
    );
  }

  private buildForm(): void {
    this.questionnaireForm = new FormGroup({
      yesNoAnswer: new FormControl(this.resultsService.results.answer5, Validators.required)
    });
  }

  public onSubmit(): void {
    this.resultsService.results.answer5 = this.questionnaireForm.value.yesNoAnswer;
    this.router.navigate(['/question6']).then(() => {});
  }

  public goBack(): void {
    this.router.navigate(['/question4']).then(() => {});
  }
}
