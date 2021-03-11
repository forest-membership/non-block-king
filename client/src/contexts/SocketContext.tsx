import React, { createContext } from 'react';
import io from 'socket.io-client';
import { BASE_URL } from './constants';

export interface ISocketContext {
  socket: SocketIOClient.Socket;
  connect: (socket: SocketIOClient.Socket) => void;
}

interface ISocketProvierProps {
  children: React.ReactNode;
}

/** FIXME: 현재 sticky-session 대신에 long-polling 방식을 disable 하는 것으로 임시 대안 (향후 변경 검토) */
const socket = io(BASE_URL, { autoConnect: false, transports: ['websocket'] });
const connect = (socket: SocketIOClient.Socket) => socket.connect();
export const SocketContext = createContext<ISocketContext | undefined>(
  undefined
);

function SocketProvider({ children }: ISocketProvierProps): JSX.Element {
  return (
    <SocketContext.Provider value={{ socket, connect }}>
      {children}
    </SocketContext.Provider>
  );
}

export default SocketProvider;
