import { Subscription } from "rxjs";
import { OnInit, OnDestroy } from "@angular/core";
import { Component } from "@angular/core";
import {
  Router,
  ActivatedRoute,
  RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from "@angular/router";

import { ApiService, CrudUtil, StoreService } from "m-crud-state";

import { EntityName } from "./utils/entity-name";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  isLoading: boolean = false;

  private crudStateSub: Subscription;

  constructor(
    private storeService: StoreService,
    private crudUtil: CrudUtil,
    private apiService: ApiService,
    private router: Router
  ) {
    router.events.subscribe((routerEvent: RouterEvent) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  ngOnInit() {
    this.loadUserLogin();
  }

  ngOnDestroy() {
    this.crudStateSub && this.crudStateSub.unsubscribe();
  }

  loadUserLogin() {
    if (localStorage.getItem("userLogin")) {
      this.storeService.loadData({
        key: EntityName.UserLogin,
        value: JSON.parse(localStorage.getItem("userLogin"))
      });
    }

    this.crudUtil.getData(EntityName.UserLogin).subscribe(result => {
      if (!result) {
        return;
      }

      this.apiService.headersRequest = {
        Authorization: `Bearer ${result.accessToken}`
      };
    });
  }

  checkRouterEvent(routerEvent: RouterEvent): void {
    if (routerEvent instanceof NavigationStart) {
      this.isLoading = true;
    }

    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      this.isLoading = false;
    }
  }
}
