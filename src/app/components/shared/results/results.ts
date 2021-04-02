import {Injectable} from '@angular/core';
import {ResultsQuestion10} from './results-question-10';

@Injectable()
export class Results {

  public answer1: string | undefined;
  public answer2: string | undefined;
  public answer3: string | undefined;
  public answer4: string | undefined;
  public answer5: string | undefined;
  public answer6: string | undefined;
  public answer7: string | undefined;
  public answer8: string | undefined;
  public answer9: string | undefined;
  public answer10: ResultsQuestion10 = new ResultsQuestion10();
  public answer11: string | undefined;
  public answer12: string | undefined;

  constructor() {
  }
}
