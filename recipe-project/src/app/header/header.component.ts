import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderCompoent {
  constructor() {

  }

  @Output() switchEmitter: EventEmitter<string> = new EventEmitter<string>();


  onSwitchRecipe(){
    this.switchEmitter.emit('recipe');
  }

  onSwitchShopList(){
    this.switchEmitter.emit('shopList');
  }
}
