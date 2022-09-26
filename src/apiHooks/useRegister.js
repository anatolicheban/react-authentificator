import axios from 'axios'

const useRegister = () => {

  const register = axios.create({
    baseURL: 'https://team-auth.herokuapp.com/v1'
  })

  return (email, login, password1, password2) => {
    register.post({
      email,
      login,
      password1,
      password2
    })
      .then(() => {

      })
      .catch((error) => {
        console.log(error);
      })
  }
}

export default useRegister