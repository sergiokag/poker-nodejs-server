import Router from 'koa-router';

import { drawCards } from '../utils/';
import db from '../db/db';


const router = new Router();

/**
 * get cards by setting the num parameter
 * /api/v1/cards/:num={NUMBER_OF_CARDS}
 **/

router.get('/api/v1/cards/:num', async (ctx) => {


    const num = +ctx.params.num;
    console.log(JSON.stringify(ctx.params))
    const NUM_OF_CARDS = num ? num : null;
    const cards = drawCards(NUM_OF_CARDS, db);

    ctx.body = {
      status: 'success',
      message: `${ ctx.params.num } requested card(s)`,
      cards
    };
})

export default router;