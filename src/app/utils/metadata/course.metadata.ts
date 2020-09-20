import { EntityName } from "./../entity-name";
import { Metadata, HttpRequestMethod } from "m-crud-state";

const baseUrl = "https://elearning0706.cybersoft.edu.vn/api";

export const courseMetadata: Metadata = {
  entityName: EntityName.KhoaHoc,
  primaryKey: "maKhoaHoc",
  getEntities: {
    url: `${baseUrl}/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`,
    method: HttpRequestMethod.GET
  },
  getEntity: {
    url: `${baseUrl}/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc={maKhoaHoc}`,
    method: HttpRequestMethod.GET
  },
  deleteEntity: {
    url: `${baseUrl}/QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc={maKhoaHoc}`,
    method: HttpRequestMethod.DELETE,
    message: {
      result: "Xóa khóa học thành công !"
    }
  },
  createEntity: {
    url: `${baseUrl}/QuanLyKhoaHoc/ThemKhoaHoc`,
    method: HttpRequestMethod.POST,
    message: {
      result: "Thêm khóa học thành công !"
    }
  },
  updateEntity: {
    url: `${baseUrl}/QuanLyKhoaHoc/CapNhatKhoaHoc`,
    method: HttpRequestMethod.PUT,
    message: {
      result: "Cập nhật khóa học thành công !"
    }
  }
};
