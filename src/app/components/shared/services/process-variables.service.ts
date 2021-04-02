import {Injectable} from '@angular/core';
import questionnaireQuestions from '../model/questionnaireQuestions.json';

@Injectable({
    providedIn: 'root'
})
export class ProcessVariablesService {

    public nextStepButtonText = 'Przejdź dalej';
    public questionnaireData: {
      1: number, 2: number, 3: number, 4: number, 5: number, 6: number,
      7: number, 8: number, 9: number, 10: number, 11: number, 12: number
    } = questionnaireQuestions;

    public answer = '';
}
