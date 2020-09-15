import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import {
  MCrudStateModule,
  CrudUtil,
  StoreService,
  ApiService,
  NotificationService
} from "m-crud-state";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { metadataArray } from "./utils/metadata";
import { MainComponent } from "./main/main.component";

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MCrudStateModule.forRoot({ metadataArray })
  ],
  providers: [CrudUtil, StoreService, ApiService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
