import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ProcessVariablesService} from '../../shared/services/process-variables.service';
import {ResultsService} from '../../shared/results/results.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'screen5',
  templateUrl: './screen5.component.html',
  styleUrls: ['./screen5.component.css']
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
    this.question5 = this.processVariablesService.questions[4].question5;
    this.getPossibleAnswers();
    this.nextStepButtonText = this.processVariablesService.nextStepButtonText;
    this.buildForm();
  }

  getPossibleAnswers(): void {
    // @ts-ignore
    this.processVariablesService.questions[4].answers.forEach(
        (possibleAnswer: { answer: string; }) => this.answers.push(possibleAnswer.answer)
    );
  }

  private buildForm(): void {
    this.questionnaireForm = new FormGroup({
      yesNoAnswer: new FormControl(this.defaultValue(), Validators.required)
    });
  }

  private defaultValue(): string {
    // @ts-ignore
    return this.resultsService.results.answer5 ? this.resultsService.results.answer5 : null;
  }

  public onSubmit(): void {
    this.resultsService.results.setAnswer5(this.questionnaireForm.value.yesNoAnswer);
    if (this.resultsService.results.answer5 === 'Nie' && this.resultsService.results.answer1 === 'Kobieta') {
      this.router.navigate(['/question6']).then(() => {});
    } else {
      this.router.navigate(['/question7']).then(() => {});
    }
  }

  public goBack(): void {
    this.router.navigate(['/question4']).then(() => {});
  }
}
