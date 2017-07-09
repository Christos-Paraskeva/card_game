"strict mode";

function Deck() {
  this.names = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
  this.suits = ['Hearts','Diamonds','Spades','Clubs'];
  this.cards = [];
}

Deck.prototype = {
  createDeck: function () {
    for( var s = 0; s < this.suits.length; s++ ) {
      for( var v = 0; v < this.names.length; v++ ) {
        this.cards.push( new Card( v+1, this.names[v], this.suits[s] ) );
        }
      }

    return this.cards;
  }
};
