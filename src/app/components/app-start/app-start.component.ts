import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './app-start.component.html',
  styleUrls: ['./app-start.component.css']
})
export class AppStartComponent implements OnInit {

  public fillInQuestionnaire = 'Wypełnij ankietę';
  public covid = 'Covid';
  public pneumococcus = 'Pneumokoki';
  public pregnancy = 'Ciąża';
  public orderEbook = 'Zamów ebooka';

  constructor() { }

  ngOnInit(): void {
  }

}
