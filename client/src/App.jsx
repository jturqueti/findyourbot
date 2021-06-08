import React from "react";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import FooterMain from "./components/FooterMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";
import Solutions from "./pages/Solutions";
import Browser from "./pages/Browser";
import SolutionDetails from "./pages/SolutionDetails";
import CreateSolution from "./pages/CreateSolution";
import UpdateSolution from "./pages/UpdateSolution";
import ProspectList from "./pages/ProspectList"

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/solutions" component={Solutions} />
        <Route exact path="/solutions/:id" component={SolutionDetails} />
        <Route exact path="/browser" component={Browser} />
        <ProtectedRoute exact path="/create" component={CreateSolution} />
        <ProtectedRoute exact path="/update/:id" component={UpdateSolution} />
        <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute exact path="/prospect" component={ProspectList} />
      </Switch>
      <FooterMain />
    </div>
  );
}

export default App;
