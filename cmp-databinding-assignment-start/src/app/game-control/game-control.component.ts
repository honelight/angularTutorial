import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  currentNumber = 0;

  @Output() gameStart = new EventEmitter();
  @Output() gameStop = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.gameStart.emit();
  }

  onStopGame() {
    this.gameStop.emit();
  }
}
