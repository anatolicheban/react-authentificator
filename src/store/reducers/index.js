import { combineReducers } from "redux";
import { itemReducer } from "./item-reducer";
import { userReducer } from "./user-reducer";
import { autorisationReducer } from "./autorisationReducer";

export const rootReducer = combineReducers({
  authItems: itemReducer,
  user: userReducer,
  autorisation: autorisationReducer
})