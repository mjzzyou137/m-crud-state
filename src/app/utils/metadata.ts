import { Metadata } from "m-crud-state";

import {
  loginMetadata,
  categoryMetadata,
  userMetadata,
  courseMetadata
} from "./metadata/index";

export const metadata: Metadata[] = [
  courseMetadata,
  loginMetadata,
  categoryMetadata,
  userMetadata
];
