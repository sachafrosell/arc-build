import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import LandingPage from './LandingPage.js'
import ContentNewCard from './ContentNewCard.js'
import ContentCard from './ContentCard.js'
import Team from './Team.js'
import About from './About.js'
import Contact from './Contact.js'
import PillarPage from './PillarPage.js'
import Housing from './Housing.js'

import { BrowserRouter, Route, Switch, Redirect, HashRouter } from "react-router-dom";
import { createStore } from 'redux'

// styles
import "./assets/css/bootstrap.min.css";
import "./assets/css/now-ui-kit.css";
// import "assets/css/now-ui-kit.min.css";
// import "assets/css/now-ui-kit.css.map";
import "./assets/demo/demo.css";


ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route
        path="/home"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/arc-roads"
        render={(props) => <PillarPage {...props} />}
      />
      <Route
        path="/arc-housing"
        render={(props) => <Housing {...props} />}
      />

      <Route
        path="/contact"
        render={(props) => <Contact {...props} />}
      />


      <Redirect from="/" to="/home" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
