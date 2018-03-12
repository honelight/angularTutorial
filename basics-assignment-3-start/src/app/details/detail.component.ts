///<reference path="../../../node_modules/@angular/compiler/src/core.d.ts"/>
import {Component} from '@angular/core';

@Component({
  selector : 'app-details',
  templateUrl : './detail.component.html',
  styleUrls : ['./detail.component.css']
})

export class DetailComponent {
  logMessage = [];
  logCounter = 0;
  hidden = false;

  constructor() {

  }

  checkColor(element): string {
    if(this.logMessage.indexOf(element) < 5) {
      return 'transparent';
    }else{
      return 'blue';
    }
  }

  checkIndex(element): boolean {
    return this.logMessage.indexOf(element) >= 5;
  }

  onClickButton() {
    this.logMessage.push(this.logCounter);
    this.logCounter += 1;
    if (this.hidden === true) {
      this.hidden = false;
    } else {
      this.hidden = true;
    }
  }
}
