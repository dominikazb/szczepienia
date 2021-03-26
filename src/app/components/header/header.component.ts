import {Component, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title = 'Lekarz Rodzinny.blog';
  public subtitle = 'zdrowie okiem lekarza. od początku. do końca.';

  constructor() { }

  ngOnInit(): void {
  }

}
