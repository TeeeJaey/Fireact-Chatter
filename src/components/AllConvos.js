import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { Button, Alert } from "react-bootstrap";
import { FaUserPlus, FaSearch } from "react-icons/fa";

import { useAuth } from "../services/AuthContext";
import { useOpenConvo } from "../services/OpenConvoContext";

export default function AllConvos(props) {
    const { currentConvo, openConvo } = useOpenConvo();

    let convos = ['friend 1', 'friend 2','friend 1', 'friend 2','friend 1', 'friend 2','friend 1', 'friend 2','friend 1', 'friend 2','friend 1', 'friend 2','friend 1', 'friend 2','friend 1', 'friend 2','friend 1', 'friend 2'];

    return (
        <ListGroup style={{maxHeight: "100%"}} >
            <div className="input-container">
                <input className="input-field" placeholder="Search in friends" />
                <button className="input-btn btn-danger" >
                    <FaSearch />
                </button>
            </div>
            <div style={{maxHeight: "100%",overflow: "auto"}}>
                {convos.map(convo => {
                    let selectedClass = "";
                    if(convo === selectedClass)
                        selectedClass = "selected";
                    
                    return (
                        <ListGroup.Item key={convo} className={"convo-list "+selectedClass} style={{cursor:"pointer"}} onClick={(convo) => openConvo(convo)}> 
                            <span style={{margin:"auto 0"}} > {convo} </span>
                        </ListGroup.Item>
                    );
                })}
            </div>
        </ListGroup>
    );
}
