import { EntityName } from "./../entity-name";
import { Metadata, HttpRequestMethod } from "m-crud-state";

const baseUrl = "https://5f4b8248ea007b0016b1d88b.mockapi.io/api/v1";

export const userMetadata: Metadata = {
  entityName: EntityName.User,
  primaryKey: "id",
  getEntities: {
    url: `${baseUrl}/users`,
    method: HttpRequestMethod.GET
  },
  getEntity: {
    url: `${baseUrl}/users/{id}`,
    method: HttpRequestMethod.GET
  },
  createEntity: {
    url: `${baseUrl}/users`,
    method: HttpRequestMethod.POST,
    message: {
      result: "Tạo thành công !"
    }
  },
  updateEntity: {
    url: `${baseUrl}/users/{id}`,
    method: HttpRequestMethod.PUT,
    message: {
      result: "Cập nhật thành công !"
    }
  },
  deleteEntity: {
    url: `${baseUrl}/users/{id}`,
    method: HttpRequestMethod.DELETE,
    message: {
      result: "Xóa thành công !"
    }
  }
};
