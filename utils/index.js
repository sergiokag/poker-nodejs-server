// get random card from deck
export const getRandomCards = (numOfCards, deck) => {
  const selectedCards = [];

  for(let i = 0; i < numOfCards; i++) {
    const card = deck[Math.floor(Math.random()*deck.length)];
    const _cardIndex = selectedCards.findIndex( x => x.suit === card.suit && x.rank === card.rank );

    if(_cardIndex === -1){
      selectedCards.push(card);
    }
  }

  return selectedCards;
};

//remove selected cards from deck
export const removeSelectedCardsFromDeck = (cards, deck) => {
  cards.forEach( c => {
    const _cardIndex = deck.findIndex( x => x.suit === c.suit && x.rank === c.rank );
    if (_cardIndex !== -1) {
      deck.splice(_cardIndex, 1);
    }
  });
};