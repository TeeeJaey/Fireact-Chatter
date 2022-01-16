import React from 'react';
import { FaUser } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";


export default function Message(props) {

  const curDate = new Date();
  const msgDate = new Date(props.msg.time);

  let showdate = msgDate.toDateString().substring(4).trim();
  if(curDate.getFullYear() == msgDate.getFullYear()) {
    showdate = showdate.substring(0, showdate.length-4).trim();
    
    if(curDate.getMonth() == msgDate.getMonth()
      && curDate.getDate() == msgDate.getDate()) {

        const ampm = msgDate.toLocaleString().split(',')[1].trim().split(' ')[1];
        const timeString = msgDate.toLocaleString().split(',')[1].trim().split(' ')[0].split(':').slice(0,2).join(':');;
        showdate = timeString + " " + ampm;
    }
  }

  if(props.msg.sender=="Agent")
    return  <div key={props.i} className="chatbox agent"> 
              <FaRobot className="icon chat-icon"/>
              <div className='msg' >
                <div> {props?.msg?.text}</div>
                <div className='time'> {showdate} </div>
              </div>
            </div>;
  else
    return  <div key={props.i} className="chatbox user"> 
              <div className='msg'>
                {props.msg.text}                  
                <div className='time'> {showdate} </div>
              </div>
              <FaUser className="icon chat-icon"/>
            </div>;
}
