import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setErrMessage, setIsLoggedIn } from "../store/actions/autorisationActions";
import { setItems } from "../store/actions/itemsActions";


const useGetItems = () => {
  const dispatch = useDispatch()
  // const navigate = useNavigate()

  const getItems = axios.create({
    baseURL: 'https://team-auth.herokuapp.com/v1',
  })

  return () => {
    getItems.get('/subscriptions', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then((data) => {
        console.log(data);
        dispatch(setItems(data.data))
      })
      .catch((error) => {
        console.log(error);
        localStorage.removeItem('token')
        dispatch(setIsLoggedIn(false))
        dispatch(setErrMessage('Network Error (Check console for more info)'))


      })
  }
}

export default useGetItems