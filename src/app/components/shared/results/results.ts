import {Injectable} from '@angular/core';

@Injectable()
export class Results {

  public answer1: string | undefined;
  public answer2: string | undefined;
  public answer3: string | undefined;
  public answer4: string | undefined;
  public answer5: string | undefined;

  constructor() {
  }

  public setAnswer1(answer: string): void {
    this.answer1 = answer;
  }

  public setAnswer2(answer: string): void {
    this.answer2 = answer;
  }

  public setAnswer3(answer: string): void {
    this.answer3 = answer;
  }

  public setAnswer4(answer: string): void {
    this.answer4 = answer;
  }

  public setAnswer5(answer: string): void {
    this.answer5 = answer;
  }
}
