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
}


export class UICard {
  public value: number;
  public name: string;
  public flipped: boolean;
  public selected: boolean;

  constructor(
    public rank: number,
    public suit: Suit
  ) {
    this.flipped = false;
    this.selected = false;
    this.value = getCardValueByOrderNumber(rank);
    this.name = getCardName(rank, suit)
  }
}

export const getCardValueByOrderNumber = (order: number): number => (order !== 1) ? order : 14;
export const getCardName = (rank: number, suit: Suit) => {
  return `${RankName[rank]} of ${suit}`;
}