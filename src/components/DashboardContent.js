import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useAuth } from "../services/AuthContext";
import Constants from "../Constants";
import { useOpenConvo } from "../services/OpenConvoContext";
import AllConvos from "./AllConvos";
import OpenedConvo from "./OpenedConvo";

export default function DashboardContent(props) {
    const { currentUser } = useAuth();

    return (
        <div className="card-body dashboard-container">
            <div className="all-convos"> <AllConvos/> </div>
            <div className="opened-convo"> <OpenedConvo/> </div>
        </div>
    );
}
