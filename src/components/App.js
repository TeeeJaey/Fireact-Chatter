import React from "react";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import PrivateRoute from "./auth/PrivateRoute";
import { AuthProvider } from "../services/AuthContext";
import { OpenConvoProvider } from "../services/OpenConvoContext";
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
                <Switch>
                  <OpenConvoProvider>
                      <PrivateRoute exact path="/" component={Dashboard} />
                  </OpenConvoProvider>
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                </Switch>
          </AuthProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
