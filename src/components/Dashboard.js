import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

import { useAuth } from "../services/AuthContext";
import { useRequest } from "../services/RequestContext";
import DashboardContent from "./DashboardContent";
import Constants from "../Constants";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const { currentRequest } = useRequest();
  const history = useHistory();
  
  let showStop = false;
  if(currentUser.type === Constants.userTypes.trainer)
    showStop = true;
  
  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  let dashboardDisplay = 0;
  if(currentRequest && currentRequest.status !== Constants.requestStatus.active) {
    if(currentUser.type === Constants.userTypes.seeker)
        dashboardDisplay = 1;
    else 
      dashboardDisplay = 2;
     
  }

  return (
      <div className="card" style={{height:"90vh"}}>
        <div className="card-header">
          <div className="dashboard-header" >
            <div className="dashboard-header-data" >
              <span style={{margin: "auto 0px", marginRight:"15px"}}>
                <strong>User:</strong> {currentUser.email}
              </span>
            </div>
            <Button variant="link" onClick={handleLogout} className="red-button" disabled={dashboardDisplay===0}>
              <span style={{margin:"0px 5px"}} >Log Out</span>
              <FaSignOutAlt />
            </Button>
          </div>
                {error && <Alert variant="danger">{error}</Alert>}
        </div>

        <DashboardContent/>
      
      </div>
  );
}
