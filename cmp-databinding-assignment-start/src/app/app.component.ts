import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentValue = 0;
  myvar = null;
  showNumber = false;

  onGameStarted() {
    this.showNumber = false;
    this.myvar = setInterval( () => {this.currentValue += 1; }, 1000);
  }

  addValue() {
    this.currentValue = this.currentValue + 1;
  }

  onGameStopped() {
    this.showNumber = true;
    console.log(this.currentValue);
    clearInterval(this.myvar);
  }
}
