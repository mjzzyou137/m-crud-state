import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";

import { Subscription } from "rxjs";
import { CrudUtil } from "m-crud-state";

import { EntityName } from "./../../utils/entity-name";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styles: [
    `
      .w-40 {
        width: 40%;
      }
    `
  ]
})
export class LoginComponent implements OnInit, OnDestroy {
  userLoginSub: Subscription;

  constructor(private router: Router, private crudUtil: CrudUtil) {}

  ngOnInit() {}

  ngOnDestroy() {
    this.userLoginSub && this.userLoginSub.unsubscribe();
  }

  login(taiKhoan, matKhau) {
    this.userLoginSub = this.crudUtil
      .loadData({
        entityName: EntityName.UserLogin,
        queryParams: null,
        requestOptions: {
          body: {
            taiKhoan,
            matKhau
          }
        }
      })
      .subscribe(result => {
        localStorage.setItem("userLogin", JSON.stringify(result));
        this.router.navigateByUrl("/elearning/courses");
      });
  }
}
