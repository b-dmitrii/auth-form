import React from "react";
import { useDispatch } from "react-redux";
import { Operation } from "../../../store/auth/auth";
import { withRouter } from "react-router";

import "./auth-page.css";

const AuthPage = ({ history }) => {
  const dispatch = useDispatch();

  const exit = () => {
    dispatch(Operation.isLogged(false));
    history.push("/");
  };
  return (
    <div className="auth-page">
      <p>Вы успешно авторизовались</p>
      <button onClick={() => exit()}>Выйти</button>
    </div>
  );
};

export default withRouter(AuthPage);
