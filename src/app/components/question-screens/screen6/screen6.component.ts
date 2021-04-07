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
  // @ts-ignore
  public questionnaireForm: FormGroup;
  public currentIndex: number | undefined;

  constructor(private processVariablesService: ProcessVariablesService,
              private resultsService: ResultsService,
              private router: Router) { }

  ngOnInit(): void {
    // @ts-ignore
    this.question6 = this.processVariablesService.questionnaireData[6].question;
    this.getPossibleAnswers();
    this.getIndexOfChosenAnswer();
    this.buildForm();
  }

  getPossibleAnswers(): void {
    // @ts-ignore
    this.processVariablesService.questionnaireData[6].answers.forEach(
        (possibleAnswer: { answer: string; }) => this.answers.push(possibleAnswer.answer)
    );
  }

  private buildForm(): void {
    this.questionnaireForm = new FormGroup({
      yesNoAnswer: new FormControl(this.resultsService.results.answer6, Validators.required)
    });
  }

  private getIndexOfChosenAnswer(): void {
    this.answers.forEach(answer => {
      if (answer === this.resultsService.results.answer6) {
        this.currentIndex = this.answers.indexOf(answer);
      }
    });
  }

  passIndexValue(index: number): void {
    this.currentIndex = index;
  }

  public onSubmit(): void {
    this.resultsService.results.answer6 = this.questionnaireForm.value.yesNoAnswer;
    this.router.navigate(['/question7'], { skipLocationChange: true }).then(() => {});
  }

  public goBack(): void {
    this.router.navigate(['/question5'], { skipLocationChange: true }).then(() => {});
  }
}
