import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProcessVariablesService} from '../../shared/services/process-variables.service';
import {ResultsService} from '../../shared/results/results.service';
import {Router} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'screen10',
  templateUrl: './screen10.component.html'
})
export class Screen10Component implements OnInit {

  public question10 = '';
  // @ts-ignore
  public questionnaireForm: FormGroup;

  public answer1: string | undefined;
  public answer2: string | undefined;
  public answer3: string | undefined;
  public answer4: string | undefined;
  public answer5: string | undefined;
  public answer6: string | undefined;
  public answer7: string | undefined;
  public answer8: string | undefined;
  public answer9: string | undefined;
  public answer10: string | undefined;
  public answer11: string | undefined;

  constructor(public processVariablesService: ProcessVariablesService,
              private resultsService: ResultsService,
              private router: Router) { }

  ngOnInit(): void {
    // @ts-ignore
    this.question10 = this.processVariablesService.questionnaireData[10].question;
    this.getPossibleAnswers();
    this.buildForm();
  }

  private getPossibleAnswers(): void {
    // @ts-ignore
    this.answer1 = this.processVariablesService.questionnaireData[10].answer1;
    // @ts-ignore
    this.answer2 = this.processVariablesService.questionnaireData[10].answer2;
    // @ts-ignore
    this.answer3 = this.processVariablesService.questionnaireData[10].answer3;
    // @ts-ignore
    this.answer4 = this.processVariablesService.questionnaireData[10].answer4;
    // @ts-ignore
    this.answer5 = this.processVariablesService.questionnaireData[10].answer5;
    // @ts-ignore
    this.answer6 = this.processVariablesService.questionnaireData[10].answer6;
    // @ts-ignore
    this.answer7 = this.processVariablesService.questionnaireData[10].answer7;
    // @ts-ignore
    this.answer8 = this.processVariablesService.questionnaireData[10].answer8;
    // @ts-ignore
    this.answer9 = this.processVariablesService.questionnaireData[10].answer9;
    // @ts-ignore
    this.answer10 = this.processVariablesService.questionnaireData[10].answer10;
    // @ts-ignore
    this.answer11 = this.processVariablesService.questionnaireData[10].answer11;
  }

  private buildForm(): void {
    this.questionnaireForm = new FormGroup({
      answer1: new FormControl(this.resultsAnswer10Exists() ? this.resultsService.results.answer10.answer1 : false),
      answer2: new FormControl(this.resultsAnswer10Exists() ? this.resultsService.results.answer10.answer2 : false),
      answer3: new FormControl(this.resultsAnswer10Exists() ? this.resultsService.results.answer10.answer3 : false),
      answer4: new FormControl(this.resultsAnswer10Exists() ? this.resultsService.results.answer10.answer4 : false),
      answer5: new FormControl(this.resultsAnswer10Exists() ? this.resultsService.results.answer10.answer5 : false),
      answer6: new FormControl(this.resultsAnswer10Exists() ? this.resultsService.results.answer10.answer6 : false),
      answer7: new FormControl(this.resultsAnswer10Exists() ? this.resultsService.results.answer10.answer7 : false),
      answer8: new FormControl(this.resultsAnswer10Exists() ? this.resultsService.results.answer10.answer8 : false),
      answer9: new FormControl(this.resultsAnswer10Exists() ? this.resultsService.results.answer10.answer9 : false),
      answer10: new FormControl(this.resultsAnswer10Exists() ? this.resultsService.results.answer10.answer10 : false),
      answer11: new FormControl(this.resultsAnswer10Exists() ? this.resultsService.results.answer10.answer11 : false)
    });
  }

  private resultsAnswer10Exists(): boolean {
    return this.resultsService.results.answer10 !== undefined;
  }

  public onSubmit(): void {
    this.setAnswers();
    this.router.navigate(['/question11'], { skipLocationChange: true }).then(() => {});
  }

  private setAnswers(): void {
    this.resultsService.results.answer10.answer1 = this.questionnaireForm.value.answer1;
    this.resultsService.results.answer10.answer2 = this.questionnaireForm.value.answer2;
    this.resultsService.results.answer10.answer3 = this.questionnaireForm.value.answer3;
    this.resultsService.results.answer10.answer4 = this.questionnaireForm.value.answer4;
    this.resultsService.results.answer10.answer5 = this.questionnaireForm.value.answer5;
    this.resultsService.results.answer10.answer6 = this.questionnaireForm.value.answer6;
    this.resultsService.results.answer10.answer7 = this.questionnaireForm.value.answer7;
    this.resultsService.results.answer10.answer8 = this.questionnaireForm.value.answer8;
    this.resultsService.results.answer10.answer9 = this.questionnaireForm.value.answer9;
    this.resultsService.results.answer10.answer10 = this.questionnaireForm.value.answer10;
    this.resultsService.results.answer10.answer11 = this.questionnaireForm.value.answer11;
  }

  public goBack(): void {
    this.router.navigate(['/question9'], { skipLocationChange: true }).then(() => {});
  }
}
