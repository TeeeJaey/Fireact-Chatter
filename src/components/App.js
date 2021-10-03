import React from "react";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import PrivateRoute from "./auth/PrivateRoute";
import { AuthProvider } from "../services/AuthContext";
import { RequestProvider } from "../services/RequestContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";

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
