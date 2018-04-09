import {NgModule} from "@angular/core";
import {ShoppingListComponent} from "./shopping-list.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {ShoppingListRouteModule} from "./shopping-list.route-module";
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";


@NgModule({
declarations: [
  ShoppingListComponent,
  ShoppingEditComponent
],
imports:[
  CommonModule,
  SharedModule
]
})
export class ShoppingListModule{

}
