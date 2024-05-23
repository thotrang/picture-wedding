import { Models } from "@rematch/core";
import { stores } from "./models/stores";

export interface RootModel extends Models<RootModel> {
  stores: typeof stores;
}

export const models: RootModel = { stores };
