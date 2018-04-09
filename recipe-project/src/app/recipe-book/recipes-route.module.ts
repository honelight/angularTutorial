import {RouterModule, Routes} from "@angular/router";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {AuthGuardService} from "../auth/auth-guard.service";
import {RecipeBookComponent} from "./recipe-book.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {NgModule} from "@angular/core";


const recipesRoutes:Routes=[
  {
    path:'', component:RecipeBookComponent, children:[
      {path:'new', component:RecipeEditComponent},
      {path:':id', component:RecipeDetailComponent},
      {path:'', component:RecipeStartComponent},
      {path:':id/edit', component:RecipeEditComponent}
  ]}
];

@NgModule({
  imports:[
    RouterModule.forChild(recipesRoutes)
  ],
  exports:[RouterModule]
})
export class RecipesRouteModule{

}
