import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonToolbar, Button, Spinner } from "react-bootstrap";
import "@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css";

document.getElementById("root").render = (
  // help needed
  <ButtonToolbar>
    <Button variant="primary" disabled>
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      <span className="sr-only">Loading...</span>
    </Button>
    <Button variant="primary" disabled>
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      Loading...
    </Button>
  </ButtonToolbar>
);

// makes sure the entire App only gets rendered AFTER we know if the user is logged in
axios
  .get("/api/auth/checkuser")
  .then(res => {
    ReactDOM.render(
      <BrowserRouter>
        <App user={res.data.userDoc} />
      </BrowserRouter>,
      document.getElementById("root")
    );
  })
  .catch(err => {
    alert("backend not running or /checkuser route not defined !");
  });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
