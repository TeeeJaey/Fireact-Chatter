import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useAuth } from "../services/AuthContext";
import Constants from "../Constants";
import TrainerService from "../services/TrainerService";
import RequestService from "../services/RequestService";
import { useRequest } from "../services/RequestContext";

export default function OpenedConvo(props) {
    
    return (
        <div style={{display:"flex",justifyContent:"center", marginTop:"100px"}}>
            Open or Start a new Conversation
        </div>
    );
}
