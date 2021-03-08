import 'reflect-metadata';
import express from 'express';
import routers from '@/routers';
import initSocket from '@/sockets';
import http from 'http';

import { expressMiddleware, thirdPartyMiddleware } from '@/middlewares/express';

class App {
  private app: express.Application;
  private port: number;
  private server!: http.Server;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.initalizeMiddlewares();
    this.initializeRouters();
  }

  private initalizeMiddlewares() {
    this.app.use(expressMiddleware);
    this.app.use(thirdPartyMiddleware);
  }

  private initializeRouters() {
    this.app.use('/', routers);
  }

  public listen() {
    this.server = this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });

    // FIXME: 클라이언트가 홈페이지에 접속하면 소켓 초기화 하는 것으로 변경
    initSocket(this.server);
  }
}

export default App;
