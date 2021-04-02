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

  constructor(private processVariablesService: ProcessVariablesService,
              private resultsService: ResultsService,
              private router: Router) { }

  ngOnInit(): void {
    // @ts-ignore
    this.question1 = this.processVariablesService.questionnaireData[1].question;
    this.getPossibleAnswers();
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

  public onSubmit(): void {
    this.resultsService.results.answer1 = this.questionnaireForm.value.gender;
    this.router.navigate(['/question2'], { skipLocationChange: true }).then(() => {});
  }
}
