import { Metadata, HttpRequestMethod } from "m-crud-state";
import { EntityName } from "../entity-name";

const baseUrl = "http://elearning0706.cybersoft.edu.vn/api";

export const loginMetadata: Metadata = {
  entityName: EntityName.UserLogin,
  loadData: {
    url: `${baseUrl}/QuanLyNguoiDung/DangNhap`,
    method: HttpRequestMethod.POST,
    message: {
      result: "Đăng nhập thành công !"
    }
  }
};
