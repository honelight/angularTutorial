import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  current_message:string="here";

  onComponent1Called(){
    console.log("here");
    this.current_message = "component1 called";
  }

  onComponent2Called(){
    this.current_message = "component2 called";
  }

  getThis(){
    return "here we go";
  }
}
