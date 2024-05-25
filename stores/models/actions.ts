import { createModel } from "@rematch/core";
import { RootModel } from "stores";

export const actions = createModel<RootModel>()({
  state: {
    notification: {},
  },
  reducers: {
    setNotification(state, notification) {
      return { ...state, notification };
    },
  },
});
