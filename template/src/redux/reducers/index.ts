import type { UnknownAction } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import types from "../types";
import type { AuthState } from "./auth";
import auth from "./auth";
import type { CommonState } from "./common";
import common from "./common";
import type { ProductState } from "./product";
import product from "./product";
import type { SettingsState } from "./settings";
import settings from "./settings";

export interface RootState {
  auth: AuthState;
  common: CommonState;
  product: ProductState;
  settings: SettingsState; // Update with the type of settings state
}
const appReducer = combineReducers({
  auth,
  common,
  product,
  settings
});
const rootReducer = (state: RootState | undefined, action: UnknownAction) => {
  if (action.type === types.CLEAR_REDUX_STATE) {
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
