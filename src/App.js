import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Help } from "./pages";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/help" render={() => <Help />} />
        <Route exact path="" render={() => <Home />} />
      </Switch>
    </Router>
  );
}

export default App;
