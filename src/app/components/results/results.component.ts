import {Component, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public firstIsCollapsed = true;
  public secondIsCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
