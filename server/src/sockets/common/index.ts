export const sendMessageToUser = (
  serverSocket: any,
  userName: string,
  message: string
) => serverSocket.to(userName).emit('message', message);
