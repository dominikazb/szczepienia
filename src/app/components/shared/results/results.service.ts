import {Results} from './results';
import {Injectable} from '@angular/core';

@Injectable()
export class ResultsService {

  public results: Results;

  constructor(results: Results) {
    this.results = results;
  }
}
