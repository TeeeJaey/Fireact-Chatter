import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { Button, Alert } from "react-bootstrap";
import { useAuth } from "../services/AuthContext";
import { FaUserPlus } from "react-icons/fa";

export default function AllConvos(props) {
    let convos = ['friend 1', 'friend 2'];
    return (
        <div>
            <ListGroup >
                <Button variant="link" className="start-new-btn" >
                    <span style={{margin:"0px 5px"}} > Start new convo </span>
                    <FaUserPlus />
                </Button>
                {convos.map(convo => {
                    return (
                        <ListGroup.Item key={convo} className="trainer-list" style={{cursor:"pointer"}}> 
                            <span style={{margin:"auto 0"}} > {convo} </span>
                        </ListGroup.Item>
                    );
                })}
            </ListGroup>
        </div>
    );
}
