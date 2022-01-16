import React from 'react';
import { FaRobot } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
export default function Header(props) {

  return  <div className="header-footer header">
              <FaRobot className="chat-icon"/>
              <div className='header-content'> Your Chat Assistant</div>
              <BsThreeDotsVertical className="chat-icon"/>
          </div>;
}
