import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthForm from "../pages/auth-form/auth-form";
import RecoveryForm from "../pages/recovery-form/recovery-form";
import RegistrateForm from "../pages/registrate-form/registrate-form";
import AuthPage from "../pages/auth-page/auth-page";

import "./app.css";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={AuthForm} />

          <Route path="/recovery" component={RecoveryForm} />
          <Route path="/registration" component={RegistrateForm} />
          <Route path="/auth" component={AuthPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
