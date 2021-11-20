import React from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import { withRouter } from "react-router";

import { Formik } from "formik";
import * as yap from "yup";

import { genToken } from "../../../utils";

import "./registrate-form.css";

const RegistrateForm = ({ history }) => {
  const validationSchema = yap.object().shape({
    login: yap
      .string()
      .typeError("Должно быть строкой")
      .required("Обязательное поле"),
    password: yap.string().required("Обязательное поле"),
    confirmPassword: yap
      .string()
      .oneOf([yap.ref("password")], "Пароли не совпадают")
      .required("Обязательное поле"),
  });

  return (
    <Formik
      initialValues={{
        login: "",
        password: "",
        confirmPassword: "",
      }}
      validateOnBlur
      onSubmit={(values) => {
        console.log(values);

        const payload = {
          token: genToken(12),
        };
        setTimeout(() => {
          console.log(payload);
          history.push("/");
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
        <form className="registrate-form">
          <h1>Регистрация</h1>
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
          <div className="password2">
            {touched.confirmPassword && errors.confirmPassword && (
              <span className="error">{errors.confirmPassword}</span>
            )}
            <VpnKeyIcon className="password-icon" />
            <input
              name="confirmPassword"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              placeholder="Введите пароль еще раз"
            />
          </div>

          <div className="registrate-form__buttons-area">
            <Link to="/">Вернуться к авторизации</Link>
            <button
              disabled={!isValid && !dirty}
              type="submit"
              onClick={handleSubmit}
            >
              Зарегистроваться
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default withRouter(RegistrateForm);
