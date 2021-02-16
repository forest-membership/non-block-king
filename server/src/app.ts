import 'reflect-metadata';
import express from 'express';
import routers from '@/routers';
import initSocket from '@/sockets';
import socketIo from 'socket.io';

import { expressMiddleware, thirdPartyMiddleware } from '@/middlewares/express';

class App {
  private app: express.Application;
  private port: number;
  private server: any;
  public io!: socketIo.Server;

  constructor(port: number) {
    this.app = express();
    this.port = port || 3000;
    this.initalizeMiddlewares();
  }

  public listen() {
    this.server = this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });

    this.io = initSocket(this.server);
  }

  private initalizeMiddlewares() {
    this.app.use(expressMiddleware);
    this.app.use(thirdPartyMiddleware);

    this.app.use('/', routers);
  }
}

export default App;
