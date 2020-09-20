import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { MCrudStateModule, METADATA_TOKEN } from "m-crud-state";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { metadata } from "./utils/metadata";
import { MainComponent } from "./main/main.component";

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [BrowserModule, AppRoutingModule, MCrudStateModule],
  providers: [
    {
      provide: METADATA_TOKEN,
      useValue: { metadata: metadata }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
