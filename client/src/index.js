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
import "@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css";
// import "https://cdn.rawgit.com/malihu/malihu-custom-scrollbar-plugin/master/jquery.mCustomScrollbar.concat.min.js";
// import "https://cdn.rawgit.com/malihu/malihu-custom-scrollbar-plugin/master/jquery.mCustomScrollbar.css";

document.getElementById("root").innerText =
  "The React app has not connected to the backend yet.";

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
