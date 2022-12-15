import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
