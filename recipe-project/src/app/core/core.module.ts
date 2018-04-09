import {NgModule} from "@angular/core";
import {HeaderCompoent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {SharedModule} from "../shared/shared.module";
import {AppRouteModule} from "../app.route.module";
import {AuthService} from "../auth/auth.service";
import {RecipeService} from "../recipe-book/recipe.service";
import {DataStorageService} from "../shared/data-storage.service";
import {AuthGuardService} from "../auth/auth-guard.service";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@NgModule({
  declarations:[HeaderCompoent,HomeComponent],
  imports:[
    SharedModule, AppRouteModule
  ],
  exports:[AppRouteModule, HeaderCompoent],
  providers:[ShoppingListService, RecipeService, DataStorageService, AuthService, AuthGuardService]
})
export class CoreModule{

}
