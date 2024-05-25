import { Models } from "@rematch/core";
import { data_store } from "./models/data_store";
import { actions } from "./models/actions";

export interface RootModel extends Models<RootModel> {
  data_store: typeof data_store;
  actions: typeof actions
}

export const models: RootModel = { data_store, actions };
