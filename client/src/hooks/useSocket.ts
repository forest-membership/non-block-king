import { useContext } from 'react';
import { SocketContext, ISocketContext } from '../contexts/SocketContext';

function useSocket(): ISocketContext {
  const context = useContext(SocketContext);
  if (context === undefined) {
    throw new Error('useSocket은 SocketContext 가 필요합니다.');
  }

  return context;
}

export default useSocket;
