import { SET_ITEMS } from "../consts"
const initialState = {
  items: [
    // {
    //   service: 'Instagram',
    //   key: '262654',
    //   id: 1
    // },
  ]
}

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return { ...state, items: action.payload }
    default: return state
  }
}