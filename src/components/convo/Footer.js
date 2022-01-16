import React, { KeyboardEvent, useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export default function Footer(props) {
  const [msg, setMsg] = useState("");

  const _handleKeyDown = (e) => {
    if(e.key == "Enter")
      sendMsg();
  }

  const sendMsg = () => {
    if(!msg) return;
    const message = {};//MessageService.createUserMsg(msg);
    props.sendMsg(message);
    setMsg("");
  }

  return  <div className="header-footer footer">
            <FaUser className="chat-icon"/>
            <input  className='chat-input' type="text" value={msg}
                    onChange={e => setMsg(e.target.value)} onKeyDown={e=>_handleKeyDown(e)} /> 
            <FiSend className='chat-icon' onClick={() => sendMsg()} />
          </div>;
}
