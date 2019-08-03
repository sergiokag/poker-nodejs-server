import koa from 'koa';
import http from 'http';

import indexRoutes from './routes/index';

import { cardsRangeMiddleWare, remaingCardsMiddleWare } from './middlewares';

// Set up the  web server
const app = new koa();
const server = http.createServer(app.callback());
const PORT = 5002;
server.listen(process.env.PORT || PORT, () => {
  console.log(`server running on port ${PORT}`)
});

/**
 * Middlewares::
 */
app.use(cardsRangeMiddleWare());
app.use(remaingCardsMiddleWare());

/**
 * Routes::
 */
app.use(indexRoutes.routes());

