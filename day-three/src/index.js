import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddBook from "./AddBook";
import ViewBooks from "./ViewBooks";
import Activity from "./Activity";
import LoginPage from "./Login";
import SignUp from "./SignUp";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/add-book" component={AddBook} />
        <Route path="/books" component={ViewBooks} />
        <Route path="/activity" component={Activity} />
        <Route path="/Login" component={LoginPage} />
        <Route path="/SignUp" component={SignUp} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
