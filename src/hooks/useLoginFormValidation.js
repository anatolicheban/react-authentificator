
import { useSelector, useDispatch } from "react-redux";
import { setErrMessage, setPwdIsValid, setUsernameIsValid } from "../store/actions/autorisationActions";

const useLoginFormValidation = () => {
  const authValues = useSelector((state) => state.autorisation);
  const dispatch = useDispatch();

  const formValidationHandler = () => {
    if (authValues.username.length === 0) {
      dispatch(setErrMessage('Введите имя пользователя'))
      dispatch(setUsernameIsValid(false))
      return false
    } else if (authValues.username.includes(' ')) {
      dispatch(setErrMessage('Введите имя пользователя без пробелов'))
      dispatch(setUsernameIsValid(false))
      return false
    } else if (authValues.username.length < 6 || authValues.username.length > 17) {
      dispatch(setErrMessage('Длина имени пользователя - от 6 до 16 символов'))
      dispatch(setUsernameIsValid(false))
      return false
    } else if (/[а-я]/i.test(authValues.username)) {
      dispatch(setErrMessage('Имя пользователя не должно содержать кириллицу'))
      dispatch(setUsernameIsValid(false))
      return false
    } else if (authValues.password.length === 0) {
      dispatch(setErrMessage('Введите пароль'))
      dispatch(setPwdIsValid(false))
      return false
    } else if (authValues.password.includes(' ')) {
      dispatch(setErrMessage('Введите пароль без пробелов'))
      dispatch(setPwdIsValid(false))
      return false
    } else if (authValues.password.length < 8 || authValues.password.length > 17) {
      dispatch(setErrMessage('Длина пароля должа состоять из 8 - 16 символов'))
      dispatch(setPwdIsValid(false))
      return false
    } else if (/[а-я]/i.test(authValues.password)) {
      dispatch(setErrMessage('Пароль не должен содержать кириллицу'))
      dispatch(setPwdIsValid(false))
      return false
    }
    return true
  };

  return formValidationHandler
}

export default useLoginFormValidation