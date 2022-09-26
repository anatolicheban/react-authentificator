import { SET_EMAIL, SET_EMAIL_IS_VALID, SET_ERR_MESSAGE, SET_PASSWORD, SET_PWD_IS_VALID, SET_USERNAME, SET_USERNAME_IS_VALID } from "../consts"

const initialState = {
  password: '',
  dublPassword: '',
  username: '',
  email: '',

  isPwdValid: true,
  isUsernameValid: true,
  isEmailValid: true,

  errMessage: ''
}

export const autorisationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PASSWORD:
      return { ...state, password: action.payload }
    case SET_EMAIL:
      return { ...state, email: action.payload }
    case SET_USERNAME:
      return { ...state, username: action.payload }
    case SET_ERR_MESSAGE:
      return { ...state, errMessage: action.payload }
    case SET_PWD_IS_VALID:
      return { ...state, isPwdValid: action.payload }
    case SET_USERNAME_IS_VALID:
      return { ...state, isUsernameValid: action.payload }
    case SET_EMAIL_IS_VALID:
      return { ...state, isEmailValid: action.payload }
    default: return state
  }

}