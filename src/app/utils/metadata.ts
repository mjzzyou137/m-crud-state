import { Metadata } from "m-crud-state";

import {
  loginMetadata,
  categoryMetadata,
  userMetadata,
  courseMetadata
} from "./metadata/index";

export const metadataArray: Metadata[] = [
  courseMetadata,
  loginMetadata,
  categoryMetadata,
  userMetadata
];
