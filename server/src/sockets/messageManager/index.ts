export const sendMessageToUser = (
  serverSocket: any,
  userName: string,
  message: string
) => serverSocket.to(userName).emit('message', message);

export const sendGameMapToUser = (
  serverSocket: any,
  userName: string,
  map: number[][]
) => serverSocket.to(userName).emit('gameMap', map);
