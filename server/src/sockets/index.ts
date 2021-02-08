import io from "socket.io";

const initSocket = (server: any) => {
    const socketIO: io.Server = new io.Server(server);
    socketIO.on("connect", (socket) => {
        console.log("클라이언트와 연결되었습니다.");
        socket.on("pressUpKey", () => {
            console.log("업을 눌렀습니다.");
        });
        socket.on("pressDownKey", () => {
            console.log("다운을 눌렀습니다.");
        });
        socket.on("pressLeftKey", () => {
            console.log("왼쪽을 눌렀습니다.");
        });
        socket.on("pressRightKey", () => {
            console.log("오른쪽을 눌렀습니다.");
        });
    });

    return socketIO;
};

export default initSocket;
