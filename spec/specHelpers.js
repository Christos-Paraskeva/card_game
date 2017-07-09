var cardNames = function() {
  return ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
};

var suits = function() {
  return ['Hearts','Diamonds','Spades','Clubs'];
};

var formatArrayStructure = function(deck){
  var formattedDeck = [];
  for (i = 0; i < deck.length; i++) {
  formattedDeck.push([deck[i].name, deck[i].suit, deck[i].value]);
}
return formattedDeck;
};

var correctSequenceDeck = function() {
  return [ Object({ value: 1, name: 'Ace', suit: 'Hearts' }), Object({ value: 2, name: 'Two', suit: 'Hearts' }),
  Object({ value: 3, name: 'Three', suit: 'Hearts' }), Object({ value: 4, name: 'Four', suit: 'Hearts' }),
  Object({ value: 5, name: 'Five', suit: 'Hearts' }), Object({ value: 6, name: 'Six', suit: 'Hearts' }),
  Object({ value: 7, name: 'Seven', suit: 'Hearts' }), Object({ value: 8, name: 'Eight', suit: 'Hearts' }),
  Object({ value: 9, name: 'Nine', suit: 'Hearts' }), Object({ value: 10, name: 'Ten', suit: 'Hearts' }),
  Object({ value: 11, name: 'Jack', suit: 'Hearts' }), Object({ value: 12, name: 'Queen', suit: 'Hearts' }),
  Object({ value: 13, name: 'King', suit: 'Hearts' }), Object({ value: 1, name: 'Ace', suit: 'Diamonds' }),
  Object({ value: 2, name: 'Two', suit: 'Diamonds' }), Object({ value: 3, name: 'Three', suit: 'Diamonds' }),
  Object({ value: 4, name: 'Four', suit: 'Diamonds' }), Object({ value: 5, name: 'Five', suit: 'Diamonds' }),
  Object({ value: 6, name: 'Six', suit: 'Diamonds' }), Object({ value: 7, name: 'Seven', suit: 'Diamonds' }),
  Object({ value: 8, name: 'Eight', suit: 'Diamonds' }), Object({ value: 9, name: 'Nine', suit: 'Diamonds' }),
  Object({ value: 10, name: 'Ten', suit: 'Diamonds' }), Object({ value: 11, name: 'Jack', suit: 'Diamonds' }),
  Object({ value: 12, name: 'Queen', suit: 'Diamonds' }), Object({ value: 13, name: 'King', suit: 'Diamonds' }),
  Object({ value: 1, name: 'Ace', suit: 'Spades' }), Object({ value: 2, name: 'Two', suit: 'Spades' }),
  Object({ value: 3, name: 'Three', suit: 'Spades' }), Object({ value: 4, name: 'Four', suit: 'Spades' }),
  Object({ value: 5, name: 'Five', suit: 'Spades' }), Object({ value: 6, name: 'Six', suit: 'Spades' }),
  Object({ value: 7, name: 'Seven', suit: 'Spades' }), Object({ value: 8, name: 'Eight', suit: 'Spades' }),
  Object({ value: 9, name: 'Nine', suit: 'Spades' }), Object({ value: 10, name: 'Ten', suit: 'Spades' }),
  Object({ value: 11, name: 'Jack', suit: 'Spades' }), Object({ value: 12, name: 'Queen', suit: 'Spades' }),
  Object({ value: 13, name: 'King', suit: 'Spades' }), Object({ value: 1, name: 'Ace', suit: 'Clubs' }),
  Object({ value: 2, name: 'Two', suit: 'Clubs' }), Object({ value: 3, name: 'Three', suit: 'Clubs' }),
  Object({ value: 4, name: 'Four', suit: 'Clubs' }), Object({ value: 5, name: 'Five', suit: 'Clubs' }),
  Object({ value: 6, name: 'Six', suit: 'Clubs' }), Object({ value: 7, name: 'Seven', suit: 'Clubs' }),
  Object({ value: 8, name: 'Eight', suit: 'Clubs' }), Object({ value: 9, name: 'Nine', suit: 'Clubs' }),
  Object({ value: 10, name: 'Ten', suit: 'Clubs' }), Object({ value: 11, name: 'Jack', suit: 'Clubs' }),
  Object({ value: 12, name: 'Queen', suit: 'Clubs' }), Object({ value: 13, name: 'King', suit: 'Clubs' }) ];
};
