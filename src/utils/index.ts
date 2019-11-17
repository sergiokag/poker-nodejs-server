import shuffle from 'shuffle-array';
import { Card, Suit } from "../models/Card";

const generateSuitDeck = (suit: Suit): Card[] => {
    let suitDeck: Card[] = [];
    let i = 1;
    while (i < 14) {
      suitDeck = [...suitDeck, <Card> ({ rank: i, suit  })];
      i++;
    }
    return suitDeck;
};

export const generateDeck = (shuffled: boolean = false): Card[] => {
    const generatedDeck = Object.keys(Suit).map(i => Suit[i]).reduce((deck: Card[], suitName: Suit) => [...deck, ...generateSuitDeck(suitName)], []);
    return (shuffled) ? shuffle(generatedDeck, { 'copy': true }) : generatedDeck;
};

export const getCardValueByOrderNumber = (order: number): number => (order !== 1) ? order : 14;

// get random cards from deck
export const drawCards = (numOfCards: number, deck: Card[]) => {
  let selectedCards: Card[] = [];

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
export const removeSelectedCardsFromDeck = (cards: Card[], deck: Card[]) => {
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