import {Component} from '@angular/core';
import {ProcessVariablesService} from '../shared/services/process-variables.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public processVariablesService: ProcessVariablesService) { }
}
