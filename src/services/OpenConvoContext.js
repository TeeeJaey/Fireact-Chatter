import React, { useContext, useState, useEffect } from "react"
import Constants from "../Constants";
import { useAuth } from "./AuthContext";

const OpenConvoContext = React.createContext();

export function useOpenConvo() {
  return useContext(OpenConvoContext);
}

export function OpenConvoProvider({ children }) {
    const { currentUser } = useAuth();
    const [ currentConvo, setCurrentConvo ] = useState();

    const openConvo = (friendID) => {
        setCurrentConvo(friendID);
    };

    useEffect(() => {

    });

    const value = {
        currentConvo,
        openConvo
    }

    return (
        <OpenConvoContext.Provider value={value}>
        {children}
        </OpenConvoContext.Provider>
    );
}
