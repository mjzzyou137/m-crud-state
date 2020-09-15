import { ActivatedRoute } from "@angular/router";
import { Component } from "@angular/core";

@Component({
  selector: "app-chi-tiet-khoa-hoc",
  templateUrl: "./chi-tiet-khoa-hoc.component.html",
  styleUrls: ["./chi-tiet-khoa-hoc.component.scss"]
})
export class ChiTietKhoaHocComponent {
  entity: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.entity = this.route.snapshot.data.entity;
  }
}
