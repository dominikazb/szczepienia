import {Injectable} from '@angular/core';
import questionnaireQuestions from '../model/questionnaireQuestions.json';

@Injectable({
    providedIn: 'root'
})
export class ProcessVariablesService {

    public nextStepButtonText = 'Przejdź dalej';
    public questions: {question: string, answers: string[]} = questionnaireQuestions;


    public answer = '';

}
