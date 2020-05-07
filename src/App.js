import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Help, RegionResources, About, Contribute } from "./pages";
import NavBar from "./components/NavBar";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div
      style={{
        paddingTop: isMobile ? 16 : 64,
        paddingLeft: isMobile ? 16 : "5%",
        paddingRight: isMobile ? 16 : "5%",
        paddingBottom: isMobile ? 16 : 64,
      }}
    >
      <Router>
        <NavBar />
        <Switch>
          <Route
            path="/discover"
            render={({ history }) => <Help history={history} />}
          />
          <Route path="/about" render={() => <About />} />
          <Route path="/contribute" render={() => <Contribute />} />
          <Route
            path="/resources"
            render={({ location, history }) => (
              <RegionResources
                regionId={location.state.regionId}
                region={location.state.region}
                history={history}
              />
            )}
          />
          <Route exact path="/" render={() => <Redirect to="/discover" />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
