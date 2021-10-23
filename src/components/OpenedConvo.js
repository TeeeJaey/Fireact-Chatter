import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useAuth } from "../services/AuthContext";
import Constants from "../Constants";
import { useRequest } from "../services/OpenConvoContext";

export default function OpenedConvo(props) {
    
    return (
        <div style={{display:"flex",justifyContent:"center", marginTop:"100px", fontSize:"20px"}}>
            Open or Start a new Conversation
        </div>
    );
}
