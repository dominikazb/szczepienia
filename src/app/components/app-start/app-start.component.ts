import {Component} from '@angular/core';
import {ProcessVariablesService} from '../shared/services/process-variables.service';

@Component({
  selector: 'app-start',
  templateUrl: './app-start.component.html',
  styleUrls: ['./app-start.component.css']
})
export class AppStartComponent {
  constructor(public processVariablesService: ProcessVariablesService) { }
}
