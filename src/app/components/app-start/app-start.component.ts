import {Component} from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './app-start.component.html',
  styleUrls: ['./app-start.component.css']
})
export class AppStartComponent {

  public fillInQuestionnaire = 'Wypełnij ankietę';
  public covid = 'Covid';
  public pneumococcus = 'Pneumokoki';
  public pregnancy = 'Ciąża';
  public orderEbook = 'Zamów ebooka';

  constructor() { }
}
