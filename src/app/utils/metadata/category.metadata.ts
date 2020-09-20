import { Metadata, HttpRequestMethod } from "m-crud-state";
import { EntityName } from "../entity-name";

const baseUrl = "https://elearning0706.cybersoft.edu.vn/api";

export const categoryMetadata: Metadata = {
  entityName: EntityName.DanhMucKhoaHoc,
  primaryKey: "maDanhMuc",
  getEntities: {
    url: `${baseUrl}/QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
    method: HttpRequestMethod.GET
  }
};
