import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setErrMessage, setIsLoggedIn } from "../store/actions/autorisationActions";

const useLogin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loginRequest = axios.create({
    baseURL: 'https://team-auth.herokuapp.com/v1',
  })

  return (login, password) => {
    loginRequest.post('/login', {
      login, password
    })
      .then((data) => {
        console.log(data);
        if (data?.status === 200 && data.data.token) {
          localStorage.setItem('token', data.data.token)
          dispatch(setIsLoggedIn(true))
          navigate('/')
        } else {
          dispatch(setErrMessage('Произошла ошибка'))
        }

      })
      .catch((error) => {
        console.log(error);
        if (error?.response?.status === 401) {
          dispatch(setErrMessage('Неправильный логин или пароль'))
        } else {
          dispatch(setErrMessage('Ошибка сервера'))
        }
      })

  }
}

export default useLogin