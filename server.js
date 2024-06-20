import Koa from 'koa'
import Router from '@koa/router'
import fs from 'fs'
import { createServer } from "http"
import { Server } from "socket.io";
import KoaStatic from 'koa-static'

const app = new Koa();
const router = new Router();

app.use(KoaStatic('./public'))

app
  .use(router.routes())
  .use(router.allowedMethods());


const httpServer = createServer(app.callback());

const io = new Server(httpServer, { /* options */ });
io.on("connection", (socket) => {
  console.log('connection',socket.id);
});


export function server(opts={}){
  const port = opts.p || opts.port || 6888
  httpServer.listen(port,()=>{
    console.log(`server listening ${port}.`);
  });
}


