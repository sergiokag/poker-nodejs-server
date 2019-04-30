import express from 'express';
import db from './db/db';

import { getRandomCards, removeSelectedCardsFromDeck } from './utils';

// Set up the express app
const app = express();

/**
 * get cards by setting the num parameter
 * /api/v1/cards?num={NUMBER_OF_CARDS}
 */
app.get('/api/v1/cards', (req, res) => {

  const num = +req.param('num');
  const NUM_OF_CARDS = num ? num : null;
  const cards = getRandomCards(NUM_OF_CARDS, db);
  removeSelectedCardsFromDeck(cards, db);

  res.status(200).send({
    success: 'true',
    message: 'cards retrieved successfully',
    cards,
    cardsLength: cards.length,
    dbLength: db.length
  })
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});