export const RankName = {
  1 : 'Ace',
  2 : 'Two',
  3 : 'Three',
  4 : 'Four',
  5 : 'Five',
  6 : 'Six',
  7 : 'Seven',
  8 : 'Eight',
  9 : 'Nine',
  10 : 'Ten',
  11 : 'Jack',
  12 : 'Queen',
  13 : 'King',
};


export enum Suit {
  spades = 'Spades',
  hearts = 'Hearts',
  clubs = 'Clubs',
  diamonds = 'Diams'
};

export type Card = {
  rank: number;
  suit: string;
};
