// =========================================================
// * Volt React Dashboard
// =========================================================

// * Product Page: https://themesberg.com/product/dashboard/volt-react
// * Copyright 2021 Themesberg (https://www.themesberg.com)
// * Official Repository: https://github.com/themesberg/volt-react-dashboard
// * License: MIT License (https://themesberg.com/licensing)

// * Designed and coded by https://themesberg.com

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. Please contact us to request a removal.

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";


// core styles
// import "./scss/volt.scss";
import "./scss/volt.css"

// vendor styles
import "react-datetime/css/react-datetime.css";
// import * as serviceWorker from './serviceWorker';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";
if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <HashRouter>
    <ScrollToTop />
    <HomePage />
  </HashRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();