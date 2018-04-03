import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-test-component1',
  templateUrl: './test-component1.component.html',
  styleUrls: ['./test-component1.component.css']
})
export class TestComponent1Component implements OnInit {

  constructor() { }

  @Output() component1Emitter:EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
  }

  call1Emitter(){
    // console.log("component 1 emit");
    this.component1Emitter.emit();
  }

}
