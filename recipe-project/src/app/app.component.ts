import { Component } from '@angular/core';
import {ModuleExportMetadata} from "@angular/compiler-cli";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  mode = 'recipe';

  onModeSwitched(input: string){
    if (input === 'recipe'){
      this.mode = 'recipe'
    }
    else if (input === 'shopList'){
      this.mode = 'shopList';
    }
  }

}
