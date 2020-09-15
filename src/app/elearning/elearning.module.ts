import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { EntityResolve, EntitiesResolve } from "m-crud-state";

import { EntityName } from "./../utils/entity-name";
import { DanhSachKhoaHocComponent } from "./danh-sach-khoa-hoc/danh-sach-khoa-hoc.component";
import { LoginComponent } from "./login/login.component";
import { ChiTietKhoaHocComponent } from "./chi-tiet-khoa-hoc/chi-tiet-khoa-hoc.component";
import { UserComponent } from "./user/user.component";
import { UsersComponent } from "./users/users.component";

const userEntityResolveData = {
  entityName: EntityName.User,
  idFieldName: "id"
};

const courseEntityResolveData = {
  entityName: EntityName.KhoaHoc,
  idFieldName: "maKhoaHoc"
};

const routes: Routes = [
  {
    path: "courses",
    component: DanhSachKhoaHocComponent,
    resolve: {
      entities: EntitiesResolve
    },
    data: courseEntityResolveData
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "courses/:maKhoaHoc/detail",
    component: ChiTietKhoaHocComponent,
    resolve: {
      entity: EntityResolve
    },
    data: courseEntityResolveData
  },
  {
    path: "users",
    component: UsersComponent,
    resolve: {
      entity: EntitiesResolve
    },
    data: userEntityResolveData
  },
  {
    path: "users/:id/edit",
    component: UserComponent,
    resolve: {
      entity: EntityResolve
    },
    data: userEntityResolveData
  },
  {
    path: "users/add",
    component: UserComponent,
    data: userEntityResolveData
  }
];

@NgModule({
  declarations: [
    DanhSachKhoaHocComponent,
    LoginComponent,
    ChiTietKhoaHocComponent,
    UserComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EntitiesResolve, EntityResolve]
})
export class ElearningModule {}
