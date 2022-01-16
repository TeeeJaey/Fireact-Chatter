import React, { useEffect, useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useAuth } from "../../services/AuthContext";
import Constants from "../../Constants";
import { useOpenConvo } from "../../services/OpenConvoContext";
import '../../styles/convo.css'

export default function OpenedConvo(props) {
    const [msgList, setMsgList] = useState([]);
    const openedConvo = useOpenConvo();

    const addMsg = msg => {
        const newMsgList = [...msgList];
        newMsgList.push(msg);
        setMsgList(newMsgList);
    };

    if(openedConvo)
        return  <div className="content-container">
                    <Header />
                    <Content showTyping={false} msgList={msgList} />
                    <Footer sendMsg={msg => addMsg(msg)} />
                </div>
    
    return <div className="not-opened">
                Open or Start a new Conversation
            </div>;
}
