import React, { useEffect, useRef, useState } from 'react';
import Message from './Message';

//import * as img from "../images/typing.gif";
//const typing = img.default;
const typing =  require("../../images/typing.gif");

export default function Content(props) {
    const endRef = useRef(null);

    useEffect(()=>{
        //endRef.current?.scrollIntoView({ behavior: "smooth" });
    },[props.msgList]);
    
    return  <div className="content">
                {props.msgList?.map(
                    (msg,i) => <Message i={i} key={i} msg={msg}/> 
                )}
            
                {props.showTyping &&
                    <img src={typing} className="typing-gif" alt="typing..." />
                }
                <div ref={endRef} />
            </div>;
}
