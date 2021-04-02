import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProcessVariablesService} from '../../shared/services/process-variables.service';
import {Router} from '@angular/router';
import {ResultsService} from '../../shared/results/results.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'screen3',
  templateUrl: './screen3.component.html'
})
export class Screen3Component implements OnInit {

  public answers: string[] = [];
  public question3 = '';
  public nextStepButtonText = '';
  // @ts-ignore
  public questionnaireForm: FormGroup;

  constructor(private processVariablesService: ProcessVariablesService,
              private resultsService: ResultsService,
              private router: Router) { }

  ngOnInit(): void {
    // @ts-ignore
    this.question3 = this.processVariablesService.questionnaireData[3].question;
    this.getPossibleAnswers();
    this.nextStepButtonText = this.processVariablesService.nextStepButtonText;
    this.buildForm();
  }

  getPossibleAnswers(): void {
    // @ts-ignore
    this.processVariablesService.questionnaireData[3].answers.forEach(
        (possibleAnswer: { answer: string; }) => this.answers.push(possibleAnswer.answer)
    );
  }

  private buildForm(): void {
    this.questionnaireForm = new FormGroup({
      yesNoAnswer: new FormControl(this.resultsService.results.answer3, Validators.required)
    });
  }

  public onSubmit(): void {
    this.resultsService.results.answer3 = this.questionnaireForm.value.yesNoAnswer;
    this.router.navigate(['/question4']).then(() => {});
  }

  public goBack(): void {
    this.router.navigate(['/question2']).then(() => {});
  }
}
