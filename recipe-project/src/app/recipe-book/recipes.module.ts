import {NgModule} from "@angular/core";
import {RecipeBookComponent} from "./recipe-book.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item/recipe-item.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RecipesRouteModule} from "./recipes-route.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations:[
    RecipeBookComponent,
    RecipeStartComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeItemComponent
  ],
  imports:[
    ReactiveFormsModule,
    CommonModule,
    RecipesRouteModule,
    SharedModule
  ]
})
export class RecipesModule{

}
