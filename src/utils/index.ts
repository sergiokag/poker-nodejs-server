import { UICard } from "../models/Card.model";

// get random cards from deck
export const drawCards = (numOfCards: number, deck: UICard[]) => {
  let selectedCards: UICard[] = [];

  while( selectedCards.length < numOfCards ) {
    const card = deck[Math.floor(Math.random()*deck.length)];
    const _cardIndex = selectedCards.findIndex( x => x.suit === card.suit && x.rank === card.rank );

    if(_cardIndex === -1){
      selectedCards.push(card);
      removeSelectedCardsFromDeck(selectedCards, deck);
    }
  }

  return selectedCards;
};

//remove selected cards from deck
export const removeSelectedCardsFromDeck = (cards: UICard[], deck: UICard[]) => {
  cards.forEach( c => {
    const _cardIndex = deck.findIndex( x => x.suit === c.suit && x.rank === c.rank );
    if (_cardIndex !== -1) {
      deck.splice(_cardIndex, 1);
    }
  });
};

//create array with empty objects
export const createArrayWithEmptyObj = (length: number) => {
  const _arr: any[] = [];

  for(let i = 0; i < length; i++) {
    _arr.push({});
  }

  return _arr;
};