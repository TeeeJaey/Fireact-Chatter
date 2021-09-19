import React from "react";
import Signup from "./Signup";
import { AuthProvider } from "../services/AuthContext";
import { RequestProvider } from "../services/RequestContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100 dashboard" >
        <Router>
          <AuthProvider>
              <RequestProvider>
                <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                </Switch>
              </RequestProvider>
          </AuthProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
