import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRouteModule} from "./app.route.module";
import {Http, HttpModule} from "@angular/http";
import {SharedModule} from "./shared/shared.module";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {AuthModule} from "./auth/auth.module";
import { AdditionalInfoComponent } from './additional-info/additional-info.component';
import {CoreModule} from "./core/core.module";


@NgModule({
  declarations: [
    AppComponent,
    AdditionalInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    HttpModule,
    ShoppingListModule,
    SharedModule,
    AuthModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
