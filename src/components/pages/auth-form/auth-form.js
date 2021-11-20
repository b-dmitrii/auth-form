import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { Formik } from "formik";
import * as yap from "yup";
import { genToken } from "../../../utils";
import { useSelector } from "react-redux";
import { withRouter } from "react-router";

import "./auth-form.css";
import { useDispatch } from "react-redux";
import { Operation } from "../../../store/auth/auth";

const AuthForm = ({ history }) => {
  const { isLoggedIn} = useSelector((state) => state);  
  const dispatch = useDispatch();
  const validationSchema = yap.object().shape({
    login: yap
      .string()
      .typeError("Должно быть строкой")
      .required("Обязательное поле"),
    password: yap.string().required("Обязательное поле"),
  });

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/auth");
    }
  }, [isLoggedIn, history]);

  return (
    <Formik
      initialValues={{
        login: "",
        password: "",
      }}
      validateOnBlur
      onSubmit={(values) => {
        const payload = {
          login: values.login,
          password: values.password,
        };
        dispatch(Operation.setUser(payload));

        setTimeout(() => {          
          dispatch(Operation.setToken({ token: genToken(12) }));
          dispatch(Operation.isLogged(true));
        }, 2000);
      }}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
        dirty,
      }) => (
        <form className="auth-form">
          <h1>Форма входа</h1>

          <div className="login">
            {touched.login && errors.login && (
              <span className="error">{errors.login}</span>
            )}
            <PersonIcon className="login-icon" />
            <input
              name="login"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.login}
              placeholder="Логин"
            />
          </div>

          <div className="password">
            {touched.password && errors.password && (
              <span className="error">{errors.password}</span>
            )}
            <VpnKeyIcon className="password-icon" />
            <input
              name="password"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Пароль"
            />
          </div>

          <div className="auth-form__buttons-area">
            <button
              disabled={!isValid && !dirty}
              type="submit"
              onClick={handleSubmit}
            >
              Войти
            </button>
            <div>
              <Link className="auth-form__registration-link" to="/registration">
                Регистрация
              </Link>
              <Link to="/recovery">Забыли пароль?</Link>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default withRouter(AuthForm);
