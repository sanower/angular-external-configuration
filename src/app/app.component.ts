import { Component } from '@angular/core';
import {AppConfigService} from "./service/app-config.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular2';

  constructor() {
    console.log('Settings', AppConfigService.settings);
  }
}
