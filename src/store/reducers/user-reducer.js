import { SET_IS_LOGGED_IN } from "../consts"

const initialUser = {
  userId: '2635246',
  isLoggedIn: false
}

export const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case SET_IS_LOGGED_IN:
      return { ...state, isLoggedIn: action.payload }
    default: return state
  }

}