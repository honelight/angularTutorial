import { Component } from '@angular/core';
import {NumberSymbol} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = this.numbers.filter(x=> x%2 ===1);
  evenNumbers = this.numbers.filter(x=> x%2===0);
  onlyOdd = false;
}
