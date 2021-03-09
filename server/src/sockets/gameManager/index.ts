import { SocketId } from 'socket.io-adapter';
import GameService from '@/service/game';
import { KeyMap } from '@/types/key';

// TODO: 클라이언트는 게임 맵 데이터를 반환받아서 화면에 렌더링합니다.

export function initGameMap(socketId: SocketId) {
  GameService.initGame(socketId);
}

export function moveMino(socketId: SocketId, key: keyof typeof KeyMap) {
  if (key === 'CLOCK' || key === 'COUNTER_CLOCK_WISE') return;

  const success = GameService.moveMino(socketId, key);
  if (!success && key === 'DOWN') {
    GameService.settleDownMino(socketId);
  }

  /** ⚠️ 테스트용 로그 - 추후 삭제 예정 */
  if (!success) {
    console.log('이동 실패');
    if (key === 'DOWN') {
      console.log('미노 고정됨');
    }
  }
}

export function rotateMino(socketId: SocketId, key: keyof typeof KeyMap) {
  if (key !== 'CLOCK' && key !== 'COUNTER_CLOCK_WISE') return;

  const success = GameService.rotateMino(socketId, key);

  /** ⚠️ 테스트용 로그 - 추후 삭제 예정 */
  if (!success) {
    console.log('회전 실패');
  }
}
