import React from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import { Formik } from "formik";
import * as yap from "yup";

import "./recovery-form.css";

const RecoveryForm = () => {
  const validationSchema = yap.object().shape({
    login: yap
      .string()
      .typeError("Должно быть строкой")
      .required("Обязательное поле"),
  });
  return (
    <Formik
      initialValues={{
        login: "",
      }}
      validateOnBlur
      onSubmit={(values) => console.log(values)}
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
        <form className="recovery-form">
          <h1>Забыли пароль?</h1>
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
              placeholder="Введите ваш логин"
            />
          </div>

          <div className="recovery-form__buttons-area">
            <Link to="/">Вернуться к авторизации</Link>
            <button
              disabled={!isValid && !dirty}
              type="submit"
              onClick={handleSubmit}
            >
              Восстановить пароль
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default RecoveryForm;
