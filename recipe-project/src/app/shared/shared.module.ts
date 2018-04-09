import {FactoryProvider, NgModule} from "@angular/core";
import {DropDownDirective} from "./dropdown.directive";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations:[
    DropDownDirective
  ],
  imports:[
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    CommonModule,
    DropDownDirective,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule{

}
