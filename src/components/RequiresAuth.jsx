import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'

const RequiresAuth = ({ children }) => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)

  return (isLoggedIn ? children : <Navigate to={'/login'} />)
}

export default RequiresAuth