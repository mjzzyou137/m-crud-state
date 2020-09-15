import { ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";

import { DataListService, CrudUtil } from "m-crud-state";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styles: [
    `
      th,
      td {
        text-align: center;
      }
      thead {
        background-image: linear-gradient(to right, #df322f, #16428e);
      }
      th {
        color: white;
        padding: 15px 0;
      }
      td {
        padding: 10px 0;
      }
    `
  ]
})
export class UsersComponent extends DataListService {
  constructor(protected crudUtil: CrudUtil, protected route: ActivatedRoute) {
    super(route, crudUtil);
  }
}
