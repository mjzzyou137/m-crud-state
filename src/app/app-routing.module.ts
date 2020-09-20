import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainComponent } from "./main/main.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "elearning",
        loadChildren: () =>
          import("./elearning/elearning.module").then(
            mod => mod.ElearningModule
          )
      }
    ]
  }
];

// @dynamic
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
