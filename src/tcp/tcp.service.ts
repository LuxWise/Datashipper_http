import { Injectable, OnModuleInit } from '@nestjs/common';
import * as net from 'net';

@Injectable()
export class TcpService implements OnModuleInit {
  constructor() {}

  onModuleInit() {
    const server = net.createServer((socket) => {
      console.log(' Datashipper start');

      socket.on('data', (data) => {
        console.log('📨 Datos recibidos:', data.toString());
        socket.write('Mensaje recibido\n');
      });
    });

    server.listen(4040, '0.0.0.0', () => {
      console.log('🚀 Server TCP listen in port 4040');
    });
  }
}
