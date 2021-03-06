import http from 'http';
import koa from 'koa';
import bodyParser from 'koa-bodyparser';

import indexRoutes from './routes/index';
//import { cardsRangeMiddleWare, remaingCardsMiddleWare } from './middlewares';

// socket io
import SocketIO from 'socket.io';

// store
import store from './store/store';

// Actions creators
import {
  ON_CARDS_REQUEST,
  newConnectionAction,
  disConnectionAction,
  addSocketAction,
  removeSocketAction
} from './actions/index';


// Set up the web server
const PORT = 55444;
const app = new koa();
const server = http.createServer(app.callback());
server.listen(process.env.PORT || PORT, () => {
  console.log(`server running on port ${PORT}`);
});

// The HTTP server that we're going to bind to
const io = SocketIO(server);

io.on('connection', (socket) => {

  // WebSocket Connection

  const _id = socket.id; //tmp
  console.log('socket.id: ', typeof _id, JSON.stringify(_id)); //tmp

  store.dispatch( addSocketAction(socket) );
  store.dispatch( newConnectionAction(socket.id) );

  socket.on('disconnect', () => {
    console.log('a user disconnected!!!')
    store.dispatch( removeSocketAction(socket.id) );
    store.dispatch( disConnectionAction(socket.id) );
  });


  /**
   *  The following is testing reasons
   *
   *  But it will be used later
   */
  socket.on('cards request', num => {
    console.log('requested from: ', socket.id)
    store.dispatch( { type: ON_CARDS_REQUEST, payload: { num, id: socket.id } });
    console.log('cards: ' + num);
  });

});


/**
 * Middlewares::
 */
app.use(bodyParser());
// app.use(cardsRangeMiddleWare());
// app.use(remaingCardsMiddleWare());

/**
 * Routes::
 */
app.use(indexRoutes.routes()).use(indexRoutes.allowedMethods());
