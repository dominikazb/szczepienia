import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProcessVariablesService} from '../../shared/services/process-variables.service';
import {Router} from '@angular/router';
import {ResultsService} from '../../shared/results/results.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'screen1',
  templateUrl: './screen1.component.html'
})
export class Screen1Component implements OnInit {

  public genders: string[] = [];
  public question1 = '';
  // @ts-ignore
  public questionnaireForm: FormGroup;
  public currentIndex: number | undefined;

  constructor(private processVariablesService: ProcessVariablesService,
              private resultsService: ResultsService,
              private router: Router) { }

  ngOnInit(): void {
    // @ts-ignore
    this.question1 = this.processVariablesService.questionnaireData[1].question;
    this.getPossibleAnswers();
    this.getIndexOfChosenAnswer();
    this.buildForm();
  }

  getPossibleAnswers(): void {
    // @ts-ignore
    this.processVariablesService.questionnaireData[1].answers.forEach(
        (possibleAnswer: { answer: string; }) => this.genders.push(possibleAnswer.answer)
    );
  }

  private buildForm(): void {
    this.questionnaireForm = new FormGroup({
      gender: new FormControl(this.resultsService.results.answer1, Validators.required)
    });
  }

  private getIndexOfChosenAnswer(): void {
    this.genders.forEach(gender => {
      if (gender === this.resultsService.results.answer1) {
        this.currentIndex = this.genders.indexOf(gender);
      }
    });
  }

  passIndexValue(index: number): void {
    this.currentIndex = index;
  }

  public onSubmit(): void {
    this.resultsService.results.answer1 = this.questionnaireForm.value.gender;
    this.router.navigate(['/question2'], { skipLocationChange: true }).then(() => {});
  }
}
