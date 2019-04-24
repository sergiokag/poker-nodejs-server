import express from 'express';
import db from './db/db';

// Set up the express app
const app = express();

// get all cards
app.get('/api/v1/cards', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'cards retrieved successfully',
    cards: db
  })
});

app.get('/api/v1/singleCard', (req, res) => {

  db.map((card) => {
    if (card.id === 'h-1') {
      return res.status(200).send({
        success: 'true',
        message: 'card retrieved successfully',
        card,
      });
    }
  });

  return res.status(404).send({
    success: 'false',
    message: 'card does not exist',
    });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});