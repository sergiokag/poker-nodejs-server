import koa from 'koa';
import http from 'http';

import indexRoutes from './routes/index';
import db from './db/db';

// Set up the  web server
const app = new koa();
const server = http.createServer(app.callback());
const PORT = 5001;
server.listen(process.env.PORT || PORT, () => {
  console.log(`server running on port ${PORT}`)
});

/**
 * Middlewares
 */

app.use(async (ctx, next) => {

  console.log(JSON.stringify(ctx.request))

  const MIN = 3;
  const MAX = 5;
  const num = +(ctx.request.url[ctx.request.url.length - 1]); // TODO: REFACTOR
  const NUM_OF_CARDS = num ? num : null;


  const greaterOrEqualThanMin = NUM_OF_CARDS >= MIN;
  const lessOrEqualThanMax = NUM_OF_CARDS <= MAX;

  if ( !( greaterOrEqualThanMin && lessOrEqualThanMax ) ) {
    const error = `Invalid request: You must request between 3 to 5 cards.`;
    ctx.body = {
      error
    };
  }
 await next();
});

app.use(async (ctx, next) => {

  const num = +(ctx.request.url[ctx.request.url.length - 1]); // TODO: REFACTOR
  const isFalsyReq = db.length < num;

  if ( isFalsyReq ) {
    const error = `Invalid request: There are left ${ db.length } card(s) in the deck.`;
    return res.status(400).json({
      error
    });
  }
  next();
});

/**
 * Routes::
 */
app.use(indexRoutes.routes());

