
import { useDispatch } from 'react-redux'
import { setEmailIsValid, setErrMessage, setPwd, setPwdIsValid, setUsernameIsValid } from '../store/actions/autorisationActions'

const useClearValidStatus = () => {
  const dispatch = useDispatch()

  return () => {
    dispatch(setEmailIsValid(true))
    dispatch(setPwdIsValid(true))
    dispatch(setPwd(''))
    dispatch(setUsernameIsValid(true))
    dispatch(setErrMessage(''))
  }
}

export default useClearValidStatus