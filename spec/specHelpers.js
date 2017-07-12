var cardNames = function() {
  return ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
};

var suits = function() {
  return ['Hearts','Clubs','Spades','Diamonds'];
};

var formatArrayStructure = function(deck) {
  var formattedDeck = [];

  if (formattedDeck.length === 0) {
    for (i = 0; i < deck.length; i++) {
      if (formattedDeck.length < 52) {
        formattedDeck.push( [deck[i].name, deck[i].suit, deck[i].value, deck[i].originalDeckPosition ]);
      }
    }
  }

  return formattedDeck;
};

var minimizedTestDeck = function() {
  return [ Object({ value: 1, name: 'Ace', suit: 'Hearts', originalDeckPosition: 1 }), Object({ value: 2, name: 'Two', suit: 'Hearts', originalDeckPosition: 2 }),
  Object({ value: 3, name: 'Three', suit: 'Hearts', originalDeckPosition: 3 }) ];
};

var correctSequenceDeck = function() {
  return [
  Object ({ value: 1, name: 'Ace', suit: 'Hearts', originalDeckPosition: 1 }),
  Object ({ value: 2, name: 'Two', suit: 'Hearts', originalDeckPosition: 2 }),
  Object ({ value: 3, name: 'Three', suit: 'Hearts', originalDeckPosition: 3 }),
  Object ({ value: 4, name: 'Four', suit: 'Hearts', originalDeckPosition: 4 }),
  Object ({ value: 5, name: 'Five', suit: 'Hearts', originalDeckPosition: 5 }),
  Object ({ value: 6, name: 'Six', suit: 'Hearts', originalDeckPosition: 6 }),
  Object ({ value: 7, name: 'Seven', suit: 'Hearts', originalDeckPosition: 7 }),
  Object ({ value: 8, name: 'Eight', suit: 'Hearts', originalDeckPosition: 8 }),
  Object ({ value: 9, name: 'Nine', suit: 'Hearts', originalDeckPosition: 9 }),
  Object ({ value: 10, name: 'Ten', suit: 'Hearts', originalDeckPosition: 10 }),
  Object ({ value: 11, name: 'Jack', suit: 'Hearts', originalDeckPosition: 11 }),
  Object ({ value: 12, name: 'Queen', suit: 'Hearts', originalDeckPosition: 12 }),
  Object ({ value: 13, name: 'King', suit: 'Hearts', originalDeckPosition: 13 }),
  Object ({ value: 1, name: 'Ace', suit: 'Clubs', originalDeckPosition: 14 }),
  Object ({ value: 2, name: 'Two', suit: 'Clubs', originalDeckPosition: 15 }),
  Object ({ value: 3, name: 'Three', suit: 'Clubs', originalDeckPosition: 16 }),
  Object ({ value: 4, name: 'Four', suit: 'Clubs', originalDeckPosition: 17 }),
  Object ({ value: 5, name: 'Five', suit: 'Clubs', originalDeckPosition: 18 }),
  Object ({ value: 6, name: 'Six', suit: 'Clubs', originalDeckPosition: 19 }),
  Object ({ value: 7, name: 'Seven', suit: 'Clubs', originalDeckPosition: 20 }),
  Object ({ value: 8, name: 'Eight', suit: 'Clubs', originalDeckPosition: 21 }),
  Object ({ value: 9, name: 'Nine', suit: 'Clubs', originalDeckPosition: 22 }),
  Object ({ value: 10, name: 'Ten', suit: 'Clubs', originalDeckPosition: 23 }),
  Object ({ value: 11, name: 'Jack', suit: 'Clubs', originalDeckPosition: 24 }),
  Object ({ value: 12, name: 'Queen', suit: 'Clubs', originalDeckPosition: 25 }),
  Object ({ value: 13, name: 'King', suit: 'Clubs', originalDeckPosition: 26 }),
  Object ({ value: 1, name: 'Ace', suit: 'Spades', originalDeckPosition: 27 }),
  Object ({ value: 2, name: 'Two', suit: 'Spades', originalDeckPosition: 28 }),
  Object ({ value: 3, name: 'Three', suit: 'Spades', originalDeckPosition: 29 }),
  Object ({ value: 4, name: 'Four', suit: 'Spades', originalDeckPosition: 30 }),
  Object ({ value: 5, name: 'Five', suit: 'Spades', originalDeckPosition: 31 }),
  Object ({ value: 6, name: 'Six', suit: 'Spades', originalDeckPosition: 32 }),
  Object ({ value: 7, name: 'Seven', suit: 'Spades', originalDeckPosition: 33 }),
  Object ({ value: 8, name: 'Eight', suit: 'Spades', originalDeckPosition: 34 }),
  Object ({ value: 9, name: 'Nine', suit: 'Spades', originalDeckPosition: 35 }),
  Object ({ value: 10, name: 'Ten', suit: 'Spades', originalDeckPosition: 36 }),
  Object ({ value: 11, name: 'Jack', suit: 'Spades', originalDeckPosition: 37 }),
  Object ({ value: 12, name: 'Queen', suit: 'Spades', originalDeckPosition: 38 }),
  Object ({ value: 13, name: 'King', suit: 'Spades', originalDeckPosition: 39 }),
  Object ({ value: 1, name: 'Ace', suit: 'Diamonds', originalDeckPosition: 40 }),
  Object ({ value: 2, name: 'Two', suit: 'Diamonds', originalDeckPosition: 41 }),
  Object ({ value: 3, name: 'Three', suit: 'Diamonds', originalDeckPosition: 42 }),
  Object ({ value: 4, name: 'Four', suit: 'Diamonds', originalDeckPosition: 43 }),
  Object ({ value: 5, name: 'Five', suit: 'Diamonds', originalDeckPosition: 44 }),
  Object ({ value: 6, name: 'Six', suit: 'Diamonds', originalDeckPosition: 45 }),
  Object ({ value: 7, name: 'Seven', suit: 'Diamonds', originalDeckPosition: 46 }),
  Object ({ value: 8, name: 'Eight', suit: 'Diamonds', originalDeckPosition: 47 }),
  Object ({ value: 9, name: 'Nine', suit: 'Diamonds', originalDeckPosition: 48 }),
  Object ({ value: 10, name: 'Ten', suit: 'Diamonds', originalDeckPosition: 49 }),
  Object ({ value: 11, name: 'Jack', suit: 'Diamonds', originalDeckPosition: 50 }),
  Object ({ value: 12, name: 'Queen', suit: 'Diamonds', originalDeckPosition: 51 }),
  Object ({ value: 13, name: 'King', suit: 'Diamonds', originalDeckPosition: 52 })
  ];
};
