import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Help, RegionResources } from "./pages";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route
          path="/help"
          render={({ history }) => <Help history={history} />}
        />
        <Route
          path="/resources"
          render={({ location }) => (
            <RegionResources
              regionId={location.state.regionId}
              region={location.state.region}
            />
          )}
        />
        <Route exact path="" render={() => <Home />} />
      </Switch>
    </Router>
  );
}

export default App;
