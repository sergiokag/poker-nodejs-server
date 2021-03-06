import fs from 'fs';
import path from 'path';
import Router from 'koa-router';

import { drawCards } from '../utils/';
import db from '../db/db';

const router = new Router();
const distFolder = path.resolve(__dirname, '../public');

// tmp: For testing reasons
router.get('/', async (ctx) => {
  ctx.type = 'html';
  ctx.body = fs.createReadStream(`${distFolder}/index.html`);
})

/**
 * get cards by setting the num parameter
 * /api/v1/cards/:num={NUMBER_OF_CARDS}
 **/

router.get('/api/v1/cards/:num', async (ctx) => {

    const num = +ctx.params.num;
    const NUM_OF_CARDS = num ? num : null;
    const cards = drawCards(NUM_OF_CARDS, db);

    ctx.status = 200; // default is 404. Needs investigation

    ctx.body = {
      cards,
      message: `${ ctx.params.num } requested card(s)`,
      status: ctx.status,
    };
});

export default router;