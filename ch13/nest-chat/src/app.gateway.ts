import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: 'chat' })
export class ChatGeteway {
  @WebSocketServer() server: Server;

  @SubscribeMessage('message')
  handleMessage(socket: Socket, data: any): void {
    const { message, nickname } = data;
    // server.emit은 나를 포함한 모든 클라이언트에게 전송
    // server.broadcast.emit은 나를 제외하고 나머지에게 전송이라서 내 메시지와 상대 메시지를 구분하기 용이
    socket.broadcast.emit('message', `${nickname}:${message}`);
  }
}
