import React from "react";
import { useDispatch } from "react-redux";
import { Operation } from "../../../store/auth/auth";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";

import "./auth-page.css";

const AuthPage = ({ history }) => {
  const { user } = useSelector((state) => state);
  const {login} = user
  const dispatch = useDispatch();

  const exit = () => {
    dispatch(Operation.isLogged(false));
    history.push("/");
  };
  return (
    <div className="auth-page">
      <p>{`Hello ${login}`}</p>
      <button onClick={() => exit()}>Выйти</button>
    </div>
  );
};

export default withRouter(AuthPage);
