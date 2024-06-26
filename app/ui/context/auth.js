"use client"
import React, { useEffect, useState } from 'react';
import { io } from "socket.io-client";
const SessionContext = React.createContext();

function SessionProvider(props) {
    const [socket, setSocket] = useState(null)
    useEffect(() => {
        const newSocket = io("http://localhost:8088");
        setSocket(newSocket);
        return () => {
          newSocket.close();
        };
      }, [setSocket]);// Ajout des dépendances router.query.v et auto.session

  return (
    <SessionContext.Provider
      value={{
        socket,
      }}>
      {props.children}
    </SessionContext.Provider>
  );
}

export { SessionProvider, SessionContext };