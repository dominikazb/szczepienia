import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProcessVariablesService} from '../../shared/services/process-variables.service';
import {ResultsService} from '../../shared/results/results.service';
import {Router} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'screen4',
  templateUrl: './screen4.component.html',
  styleUrls: ['./screen4.component.css']
})
export class Screen4Component implements OnInit {

  public answers: string[] = [];
  public question4 = '';
  public nextStepButtonText = '';
  // @ts-ignore
  public questionnaireForm: FormGroup;

  constructor(private processVariablesService: ProcessVariablesService,
              private resultsService: ResultsService,
              private router: Router) { }

  ngOnInit(): void {
    // @ts-ignore
    this.question4 = this.processVariablesService.questions[3].question4;
    this.getPossibleAnswers();
    this.nextStepButtonText = this.processVariablesService.nextStepButtonText;
    this.buildForm();
  }

  getPossibleAnswers(): void {
    // @ts-ignore
    this.processVariablesService.questions[3].answers.forEach(
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
    return this.resultsService.results.answer4 ? this.resultsService.results.answer4 : 0;
  }

  public onSubmit(): void {
    this.resultsService.results.setAnswer4(this.questionnaireForm.value.yesNoAnswer);
    if (this.resultsService.results.answer4 === 'Kobieta') {
      this.router.navigate(['/question5']).then(() => {});
    } else {
      this.router.navigate(['/question7']).then(() => {});
    }
  }

  public goBack(): void {
    this.router.navigate(['/question3']).then(() => {});
  }
}
