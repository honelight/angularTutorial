import {RouterModule, Routes} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {ShoppingEditComponent} from "./shopping-list/shopping-edit/shopping-edit.component";
import {RecipeBookComponent} from "./recipe-book/recipe-book.component";
import {RecipeDetailComponent} from "./recipe-book/recipe-detail/recipe-detail.component";
import {RecipeItemComponent} from "./recipe-book/recipe-list/recipe-item/recipe-item.component";
import {NgModule} from "@angular/core";
import {RecipeStartComponent} from "./recipe-book/recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipe-book/recipe-edit/recipe-edit.component";

const appRoutes:Routes =[
  {path:'', redirectTo:'/recipes', pathMatch:'full'},
  {path:'shopList', component:ShoppingListComponent},
  // {path:'recipes', component:RecipeBookComponent}
  {
    path:'recipes', component:RecipeBookComponent, children:[
      {path:'new', component:RecipeEditComponent},
      {path:':id', component:RecipeDetailComponent},
      {path:'', component:RecipeStartComponent},
      {path:':id/edit', component:RecipeEditComponent}
  ]}
];


@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports:[RouterModule]
})
export class AppRouteModule{
}
