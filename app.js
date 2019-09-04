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
  newConnectionAction,
  disConnectionAction
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

  store.dispatch( newConnectionAction() );
  console.log('a user connected!!!', typeof socket, { store: JSON.stringify(store.getState(),null) }); // tmp

  socket.on('disconnect', () => {
    console.log('a user disconnected!!!')
    store.dispatch( disConnectionAction('123') ); // TODO: must set a proper id for each player
  });


  /**
   *  The following is testing reasons
   *
   *  But it will be used later
   */
  socket.on('cards request', num => {
    store.dispatch( { type: 'ON_CARDS_REQUEST', payload: num } );
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
