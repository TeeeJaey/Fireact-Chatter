import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { useOpenConvo } from "../services/OpenConvoContext";
import { useAuth } from "../services/AuthContext";
import Constants from "../Constants";
import Dropdown from "./Dropdown";
import AllConvos from "./AllConvos";
import OpenedConvo from "./OpenedConvo";

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push("/login");
    } catch {
      console.error("Failed to log out");
    }
  }

  function selectDropdown(action) {
    if(action === "Log Out")
      return handleLogout();
    if(action === "Add new Friend") {
      
    }
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
            <Dropdown label="Options" list={["Add new Friend", "Log Out"]} select={(action)=>selectDropdown(action)} />
          </div>
        </div>

        <div className="card-body dashboard-container">
            <div className="all-convos"> <AllConvos/> </div>
            <div className="opened-convo"> <OpenedConvo/> </div>
        </div>
      </div>
  );
}
