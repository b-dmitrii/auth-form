import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/app";

import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer } from "./store/auth/auth";
import { Provider } from "react-redux";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
