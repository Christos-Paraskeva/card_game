describe('Shuffle', function() {
  var testDeck = minimizedTestDeck();
  var shuffle = new Shuffle();

  it("exists", function() {
    expect(shuffle).toBeDefined();
  });

  describe('is initialized with', function() {
    // it("the current deck of cards", function(){
    //   expect(shuffle.currentDeck).toEqual(testDeck);
    // });

    it("variable confirming whether the shuffle has been performed correctly - set to false by default", function(){
      expect(shuffle.correctShuffle).toEqual(false);
    });
  });

  describe('when shuffling', function(){
    it('the default shuffle method does not return any two cards in sequence', function(){
      var shuffledCards = shuffle.defaultShuffle(testDeck);
      expect(shuffledCards).not.toEqual(undefined);
      expect(shuffledCards).not.toEqual([ Object({ value: 1, name: 'Ace', suit: 'Hearts', originalDeckPosition: 1 }), Object({ value: 2, name: 'Two', suit: 'Hearts', originalDeckPosition: 2 }), Object({ value: 3, name: 'Three', suit: 'Hearts', originalDeckPosition: 3 }) ]);
      expect(shuffledCards).not.toEqual([ Object({ value: 2, name: 'Two', suit: 'Hearts', originalDeckPosition: 2 }), Object({ value: 3, name: 'Three', suit: 'Hearts', originalDeckPosition: 3 }), Object({ value: 1, name: 'Ace', suit: 'Hearts', originalDeckPosition: 1 }) ]);
      expect(shuffledCards).not.toEqual([ Object({ value: 3, name: 'Three', suit: 'Hearts', originalDeckPosition: 3 }), Object({ value: 1, name: 'Ace', suit: 'Hearts', originalDeckPosition: 1 }), Object({ value: 2, name: 'Two', suit: 'Hearts', originalDeckPosition: 2 }) ]);
    });
  });
});
