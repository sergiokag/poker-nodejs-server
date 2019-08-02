import koa from 'koa';
import http from 'http';

import indexRoutes from './routes/index';

// Set up the  web server
const app = new koa();
const server = http.createServer(app.callback());
const PORT = 5000;
server.listen(process.env.PORT || PORT, () => {
  console.log(`server running on port ${PORT}`)
});


/**
 * Middlewares
 */
// app.use(async function(req, res, next) {

//   const MIN = 3;
//   const MAX = 5;
//   const num = +req.param('num');
//   const NUM_OF_CARDS = num ? num : null;

//   const greaterOrEqualThanMin = NUM_OF_CARDS >= MIN;
//   const lessOrEqualThanMax = NUM_OF_CARDS <= MAX;

//   if ( !( greaterOrEqualThanMin && lessOrEqualThanMax ) ) {
//     const error = `Invalid request: You must request between 3 to 5 cards.`;
//     return res.status(400).json({
//       error
//     });
//   }
//   next();
// });

// app.use(async function(req, res, next) {

//   const num = +req.param('num');
//   const isFalsyReq = db.length < num;

//   if ( isFalsyReq ) {
//     const error = `Invalid request: There are left ${ db.length } card(s) in the deck.`;
//     return res.status(400).json({
//       error
//     });
//   }
//   next();
// });

/**
 * Routes::
 */
app.use(indexRoutes.routes());
