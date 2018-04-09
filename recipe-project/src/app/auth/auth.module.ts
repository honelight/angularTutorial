import {NgModule} from "@angular/core";
import {SignupComponent} from "./signup/signup.component";
import {SigninComponent} from "./signin/signin.component";
import {CommonModule} from "@angular/common";
import {AuthRouteModule} from "./auth.route.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations:[
    SignupComponent,
    SigninComponent
  ],
  imports:[CommonModule, AuthRouteModule, SharedModule]
})
export class AuthModule{

}
