"strict mode";

function Shuffle(currentDeck) {
  this.currentDeck = currentDeck;
  this.correctShuffle = false;
}

Shuffle.prototype = {

  defaultShuffle: function () {
    var i = 0;
    var j = 0;
    var temp = null;

    while (this.correctShuffle === false) {

      for (i = this.currentDeck.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this.currentDeck [i];
        this.currentDeck[i] = this.currentDeck[j];
        this.currentDeck[j] = temp;
      }
      this._validateCorrectShuffle(this.currentDeck);
    }
  return this.currentDeck;
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

// _validateCorrectShuffle: function (deck) {
//   var confirmedCardSequence = false;
//
//   for (i=0; i < deck.length; i++) {
//     if ((i < deck.length - 1) && (deck[i].originalDeckPosition - deck[i+1].originalDeckPosition) === -1) {
//       confirmedCardSequence = true;
//     }
//   }
//
//   if (confirmedCardSequence === false) {
//     this.correctShuffle = true;
//   }
// }
