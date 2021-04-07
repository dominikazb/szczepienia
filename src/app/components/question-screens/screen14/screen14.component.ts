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
  // @ts-ignore
  public questionnaireForm: FormGroup;
  public currentIndex: number | undefined;

  constructor(public processVariablesService: ProcessVariablesService,
              private resultsService: ResultsService,
              private router: Router) { }

  ngOnInit(): void {
    // @ts-ignore
    this.question14 = this.processVariablesService.questionnaireData[14].question;
    this.getPossibleAnswers();
    this.getIndexOfChosenAnswer();
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

  private getIndexOfChosenAnswer(): void {
    this.answers.forEach(answer => {
      if (answer === this.resultsService.results.answer14) {
        this.currentIndex = this.answers.indexOf(answer);
      }
    });
  }

  passIndexValue(index: number): void {
    this.currentIndex = index;
  }

  public onSubmit(): void {
    this.resultsService.results.answer14 = this.questionnaireForm.value.yesNoAnswer;
    this.router.navigate(['/results']).then(() => {});
  }

  public goBack(): void {
    this.router.navigate(['/question13'], { skipLocationChange: true }).then(() => {});
  }
}
