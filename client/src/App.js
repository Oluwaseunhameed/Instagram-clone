import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import NavBar from "./components/Navbar"
import Home from "./pages/home"
import Signin from "./pages/signin"
import Profile from "./pages/profile"
import Signup from "./pages/signup"
import "./App.css"

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
