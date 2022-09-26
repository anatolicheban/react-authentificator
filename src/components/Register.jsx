import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Input from "./UI/Input";
import {
  setDublPwd,
  setEmail,
  setErrMessage,
  setPwd,
  setPwdIsValid,
  setUsername,
  setUsernameIsValid,
} from "../store/actions/autorisationActions";
import { useSelector, useDispatch } from "react-redux";
import useRegisterFormValidation from "../hooks/useRegisterFormValidation.js";
import useClearValidStatus from "../hooks/useClearValidStatus";

const Register = () => {
  const clearStates = useClearValidStatus()
  const [firstRender, setFirstRender] = useState(true);
  const dispatch = useDispatch();
  const formValidationHandler = useRegisterFormValidation();
  const authValues = useSelector((state) => state.autorisation);

  const passwordChangeHandler = (e) => {
    dispatch(setPwd(e.target.value));
  };

  const usernameChangeHandler = (e) => {
    dispatch(setUsername(e.target.value));
  };

  const emailChangeHandler = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const submitRegisterHandler = (e) => {
    e.preventDefault();
    if (formValidationHandler()) {
      console.log("Запрос отправлен!");
    }
  };

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
  }, [authValues.username, authValues.password, authValues.email]);


  return (
    <div className="register">
      <h1 className="register__title">Вход в систему</h1>
      {authValues.errMessage && (
        <p className="error-msg">{authValues.errMessage}</p>
      )}
      <form onSubmit={submitRegisterHandler} className="register__form">
        <Input
          label="Электронная почта"
          id="email-input"
          className={`register__email ${authValues.isEmailValid ? "" : "invalid"
            }`}
          type={"email"}
          onChange={emailChangeHandler}
          value={authValues.email ? authValues.email : ''}
        />
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
        <button className="register__submit" type="submit">
          Регистрация
        </button>
        <Link to={"/login"}>
          <button onClick={clearStates} className="back-to-login">Войти в аккаунт</button>
        </Link>
      </form>
    </div>
  );
};

export default Register;
