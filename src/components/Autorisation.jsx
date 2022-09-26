import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import Input from "./UI/Input";
import { setErrMessage, setPwd, setPwdIsValid, setUsername, setUsernameIsValid } from "../store/actions/autorisationActions";
import useLoginFormValidation from "../hooks/useLoginFormValidation";
import useClearValidStatus from "../hooks/useClearValidStatus";
import useLogin from "../apiHooks/useLogin";

const LogIn = () => {
  const [firstRender, setFirstRender] = useState(true);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const authValues = useSelector((state) => state.autorisation);
  const dispatch = useDispatch();
  const login = useLogin()

  const formValidationHandler = useLoginFormValidation()
  const clearStates = useClearValidStatus()
  console.log('Autth is rendering');

  const submitLoginHandler = (e) => {
    e.preventDefault()
    if (formValidationHandler()) {
      console.log('Запрос отправлен');
      login(authValues.username, authValues.password)
    }
  }


  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      return;
    } else {
      dispatch(setErrMessage(''))
      dispatch(setPwdIsValid(true))
      dispatch(setUsernameIsValid(true))
      const validationTimer = setTimeout(() => {
        console.log("4s");
        formValidationHandler()
      }, 4000);
      return () => clearTimeout(validationTimer);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authValues.username, authValues.password]);

  const passwordChangeHandler = (e) => {
    dispatch(setPwd(e.target.value));
  };

  const usernameChangeHandler = (e) => {
    dispatch(setUsername(e.target.value));
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  } else {
    return (
      <div className="login">
        <h1 className="login__title">Вход в систему</h1>
        {authValues.errMessage && <p className="error-msg">
          {authValues.errMessage}
        </p>}
        <form onSubmit={submitLoginHandler} className="login__form">
          <Input
            label="Имя пользователя"
            id="username-input"
            className={`register__name ${authValues.isUsernameValid ? "" : "invalid"
              }`}
            type={"text"}
            onChange={usernameChangeHandler}
            value={authValues.username ? authValues.username : ''}
          />
          <Input
            label="Пароль"
            id="password-input"
            className={`register__password ${authValues.isPwdValid ? "" : "invalid"
              }`}
            type={"password"}
            onChange={passwordChangeHandler}
            value={authValues.password ? authValues.password : ''}
          />
          <button className="login__submit" type="submit">
            Войти
          </button>
        </form>
        <Link to={"/register"}>
          <button onClick={clearStates} className="register-btn">Регистрация</button>
        </Link>
      </div>
    );
  }
};

export default LogIn
