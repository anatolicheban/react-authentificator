import { SET_EMAIL, SET_EMAIL_IS_VALID, SET_ERR_MESSAGE, SET_IS_LOGGED_IN, SET_PASSWORD, SET_PWD_IS_VALID, SET_USERNAME, SET_USERNAME_IS_VALID } from "../consts"

export const setIsLoggedIn = (value) => (
  {
    type: SET_IS_LOGGED_IN,
    payload: value
  }
)

export const setPwd = (password) => {
  return {
    type: SET_PASSWORD,
    payload: password
  }
}



export const setUsername = (username) => {
  return {
    type: SET_USERNAME,
    payload: username
  }
}

export const setEmail = (email) => {
  return {
    type: SET_EMAIL,
    payload: email
  }
}

export const setErrMessage = (message) => {
  return {
    type: SET_ERR_MESSAGE,
    payload: message
  }
}

export const setPwdIsValid = (value) => {
  return {
    type: SET_PWD_IS_VALID,
    payload: value
  }
}

export const setUsernameIsValid = (value) => {
  return {
    type: SET_USERNAME_IS_VALID,
    payload: value
  }
}

export const setEmailIsValid = (value) => {
  return {
    type: SET_EMAIL_IS_VALID,
    payload: value
  }
}