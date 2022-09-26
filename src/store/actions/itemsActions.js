import { SET_ITEMS } from "../consts";

export const setItems = (items) => (
  {
    type: SET_ITEMS,
    payload: items
  }
)