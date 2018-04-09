import {RouterModule, Routes} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list.component";
import {NgModule} from "@angular/core";

const shoppingRoute:Routes=[
  {path:'shopList', component:ShoppingListComponent}
];

@NgModule({
  imports:[RouterModule.forChild(shoppingRoute)],
  exports:[RouterModule]
})
export class ShoppingListRouteModule{

}
