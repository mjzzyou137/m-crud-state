import { ActivatedRoute, Router } from "@angular/router";
import { Component } from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";

import { CrudUtil, CrudService } from "m-crud-state";

// đây là interface cửa entity nếu không có thì thay thế = CrudService<any>
interface UserDto {
  name: string;
  gender: string;
  phone: string;
  email: string;
}

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html"
})
export class UserComponent extends CrudService<UserDto> {
  constructor(
    protected route: ActivatedRoute,
    protected crudUtil: CrudUtil,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    // kế thừa lại route và crudUtil
    super(route, crudUtil);
  }

  populateEntityBeforeSave(entity: UserDto) {
    // chúng ta có thể thêm hoặc xóa dữ liệu ở đây trước khi gọi api
    // ở đây nếu không thay đổi gì thì có thể ko cần khai báo hàm populateEntityBeforeSave
    return entity;
  }

  afterSave(result: any) {
    // giúp thao tác các tác vụ tiếp theo sau khi call api ( success or fail)
    this.router.navigate(["/elearning/users"]);
  }

  // khởi tạo form
  // có thể dùng template driven form hoặc reactive form hoặc ko dùng form
  initForm(entity: UserDto) {
    this.entityForm = this.formBuilder.group({
      name: new FormControl(entity.name),
      phone: new FormControl(entity.phone),
      gender: new FormControl(entity.gender),
      email: new FormControl(entity.email)
    });
  }
}
