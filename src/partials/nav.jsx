import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../pages/home';
import Efforts from '../pages/our-efforts';
import Goals from '../pages/goals';
import Powered from '../pages/powered';


class Navbar extends React.Component {
    render() {
      return (

        <Router>
          <ul class="nav nav-tabs navbar-dark bg-dark sticky-top">
            <li class="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/about" className="nav-link active">About</Link>
            </li>
            <li class="nav-item">
              <Link to="/goals" className="nav-link active">Goals</Link>
            </li>
            <li>
              <Link to="/powered-by" className="nav-link active">Tools</Link>
            </li>
          </ul>
          {/* A Switch looks through its children Routes and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <Efforts />
            </Route>
            <Route exact path="/goals">
              <Goals />
            </Route>
            <Route exact path="/powered-by">
              <Powered />
            </Route>
          </Switch>
      </Router>
      );
    }
}

export default Navbar;