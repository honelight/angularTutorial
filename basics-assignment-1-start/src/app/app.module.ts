import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {WarningComponents} from "./warning/Warning.components";
import {SuccessComponents} from "./success/Success.components";

@NgModule({
  declarations: [
    AppComponent,
    WarningComponents,
    SuccessComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
