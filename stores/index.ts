import { Models } from "@rematch/core";
import { data_store } from "./models/data_store";

export interface RootModel extends Models<RootModel> {
  data_store: typeof data_store;
}

export const models: RootModel = { data_store };
