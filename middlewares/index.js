import db from '../db/db';

export function cardsRangeMiddleWare() {
  return async (ctx, next) => {

    const MIN = 3;
    const MAX = 5;
    const num = +(ctx.request.url[ctx.request.url.length - 1]); // TODO: REFACTOR
    const NUM_OF_CARDS = num ? num : null;

    const greaterOrEqualThanMin = NUM_OF_CARDS >= MIN;
    const lessOrEqualThanMax = NUM_OF_CARDS <= MAX;

    if ( !( greaterOrEqualThanMin && lessOrEqualThanMax ) ) {
      const error = `Invalid request: You must request between 3 to 5 cards.`;
      ctx.body = {
        error,
        status: ctx.status
      };
    }
    else {
      await next();
    }

  }
};

export function remaingCardsMiddleWare() {
  return async (ctx, next) => {

    const num = +(ctx.request.url[ctx.request.url.length - 1]); // TODO: REFACTOR
    const isFalsyReq = db.length < num;

    if ( isFalsyReq ) {
      const error = `Invalid request: There are left ${ db.length } card(s) in the deck.`;
      return res.status(400).json({
        error,
        status: ctx.status
      });
    }
    else {
      await next();
    }

  }
}

