import { ActivatedRoute, Router } from "@angular/router";
import { Component } from "@angular/core";

import { CrudUtil, DataListService } from "m-crud-state";

@Component({
  selector: "app-danh-sach-khoa-hoc",
  templateUrl: "./danh-sach-khoa-hoc.component.html",
  styleUrls: ["./danh-sach-khoa-hoc.component.scss"]
})
export class DanhSachKhoaHocComponent extends DataListService {
  constructor(
    protected crudUtil: CrudUtil,
    private router: Router,
    protected route: ActivatedRoute
  ) {
    super(route, crudUtil);
  }

  navigate(maKhoaHoc: any) {
    this.router.navigate([`/elearning/courses/${maKhoaHoc}/detail`]);
  }

  add() {
    this.router.navigate(["/elearning/courses/add"]);
  }
}
