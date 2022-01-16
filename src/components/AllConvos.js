import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { Button, Alert } from "react-bootstrap";
import { FaUserPlus, FaSearch } from "react-icons/fa";

import { useAuth } from "../services/AuthContext";
import { useOpenConvo } from "../services/OpenConvoContext";

export default function AllConvos(props) {
    const { currentConvo, openConvo } = useOpenConvo();
    const [ search, setSearch ] = useState("");

    let orgConvos = ['friend 1', 'friend 2','friend 1', 'friend 2','friend 1', 'friend 2','friend 1', 'friend 2','friend 1', 'friend 2','friend 1', 'friend 2','friend 1', 'friend 2','friend 1', 'friend 2','friend 1', 'friend 2'];
    let convos = [...orgConvos];
    let searchTimeout = undefined; 

    useEffect(()=>{
        if(searchTimeout) 
            clearTimeout(searchTimeout);
        
        searchTimeout = setTimeout(() => {
            convos = [...orgConvos];
            convos = convos.filter(x => x.includes(search));
        },500);

    }, [search]);

    return (
        <ListGroup style={{maxHeight: "100%"}} >
            <div className="input-container">
                <input className="input-field" placeholder="Search in friends" onChange={e => setSearch(e.target.value)} />
                <button className="input-btn btn-danger" >
                    <FaSearch />
                </button>
            </div>
            <div style={{maxHeight: "100%",overflow: "auto"}}>
                {convos.map( (convo,index) => {
                    let selectedClass = "";
                    if(convo === selectedClass)
                        selectedClass = "selected";
                    
                    return (
                        <ListGroup.Item key={index} className={"convo-list "+selectedClass} style={{cursor:"pointer"}} onClick={(convo) => openConvo(convo)}> 
                            <span style={{margin:"auto 0"}} > {convo} </span>
                        </ListGroup.Item>
                    );
                })}
            </div>
        </ListGroup>
    );
}
