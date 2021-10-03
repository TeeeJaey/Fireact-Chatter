import React, { useState, useEffect } from "react";
import { FaSignOutAlt, FaBars, FaCaretDown } from "react-icons/fa";

export default function Dropdown(props) {
    const [showDropdown, setShowDropdown] = useState("none");
    
    const toggleDropdown = function() {
        if(showDropdown == "none") setShowDropdown("block");
        else setShowDropdown("none");
    };

    if(!props.list)
        props.list = [];
    
    const dropdownList = props.list;

    let dropddownListRender = [];
    dropdownList.forEach((option,i) => {
        dropddownListRender.push(<a key={option+'_'+i} className={"dropdown-item"} onClick={()=>props.select(option)}  > 
                                    <span className="ellipsis"> {option} </span> 
                                </a>);
    });


    return <div className="dropdown" style={{marginRight:"5px"}} > 
                <button className="btn btn-danger dropdown-toggle" type="button" onClick={toggleDropdown} >
                    {props.label}
                </button>
                <div className="dropdown-menu dropdown-menu-right" style={{ cursor:"pointer" , display: showDropdown}} >
                    {dropddownListRender}
                </div>
            </div>;
};