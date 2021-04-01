import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProcessVariablesService} from '../../shared/services/process-variables.service';
import {Router} from '@angular/router';
import {ResultsService} from '../../shared/results/results.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'screen3',
  templateUrl: './screen3.component.html',
  styleUrls: ['./screen3.component.css']
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
    this.question3 = this.processVariablesService.questions[2].question3;
    this.getPossibleAnswers();
    this.nextStepButtonText = this.processVariablesService.nextStepButtonText;
    this.buildForm();
  }

  getPossibleAnswers(): void {
    // @ts-ignore
    this.processVariablesService.questions[2].answers.forEach(
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
    return this.resultsService.results.answer3 ? this.resultsService.results.answer3 : 0;
  }

  public onSubmit(): void {
    this.resultsService.results.setAnswer3(this.questionnaireForm.value.yesNoAnswer);
    if (this.resultsService.results.answer3 === 'Tak') {
      this.router.navigate(['/question4']).then(() => {});
    } else {
      this.router.navigate(['/question5']).then(() => {});
    }
  }

  public goBack(): void {
    this.router.navigate(['/question2']).then(() => {});
  }
}
