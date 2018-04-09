import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {NgModule} from "@angular/core";
import {AuthGuardService} from "./auth/auth-guard.service";
import {HomeComponent} from "./core/home/home.component";

const appRoutes:Routes =[
  {path:'', component:HomeComponent},
  {path:'shopList', component:ShoppingListComponent},
  {path:'recipes',loadChildren:'./recipe-book/recipes.module#RecipesModule', canActivate:[AuthGuardService]}
];


@NgModule({
  imports:[RouterModule.forRoot(appRoutes,{preloadingStrategy: PreloadAllModules})],
  exports:[RouterModule]
})
export class AppRouteModule{
}
