const keyPressEvent = (socket: any) => {
  socket.on('pressUpKey', () => {
    console.log('업을 눌렀습니다.');
  });
  socket.on('pressDownKey', () => {
    console.log('다운을 눌렀습니다.');
  });
  socket.on('pressLeftKey', () => {
    console.log('왼쪽을 눌렀습니다.');
  });
  socket.on('pressRightKey', () => {
    console.log('오른쪽을 눌렀습니다.');
  });
  socket.on('pressEscapeKey', () => {
    console.log('ESC를 눌렀습니다.');
  });
  socket.on('pressLeftRotateKey', () => {
    console.log('Z를 눌렀습니다.');
  });
  socket.on('pressRightRotateKey', () => {
    console.log('X를 눌렀습니다.');
  });
};

export default keyPressEvent;
