import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-test-component2',
  templateUrl: './test-component2.component.html',
  styleUrls: ['./test-component2.component.css']
})
export class TestComponent2Component implements OnInit {

  constructor() { }

  @Output() component2Emitter:EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
  }

  call2Emitter(){
    // console.log("component 2 emit");
    this.component2Emitter.emit();
  }

}
