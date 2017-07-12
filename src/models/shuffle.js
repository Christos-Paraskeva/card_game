"strict mode";

function Shuffle() {
  this.correctShuffle = false;
}

Shuffle.prototype = {
  defaultShuffle: function (deck) {
    var i = 0;
    var j = 0;
    var temp = null;

    while (this.correctShuffle === false) {

      for (i = deck.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = deck [i];
        deck[i] = deck[j];
        deck[j] = temp;
      }
      this._validateCorrectShuffle(deck);
    }
  return deck;
  },

  _validateCorrectShuffle: function (deck) {
    var confirmedCardSequence = false;

    for (i=0; i < deck.length - 1; i++) {
      if ((deck[i].originalDeckPosition - deck[i+1].originalDeckPosition) === -1) {
        confirmedCardSequence = true;
      }
    }

    if (confirmedCardSequence === false) {
      this.correctShuffle = true;
    }
  }
};
