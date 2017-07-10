describe('Shuffle', function() {
  var testDeck = minimizedTestDeck();
  var shuffle = new Shuffle(testDeck);

  it("exists", function() {
    expect(shuffle).toBeDefined();
  });

  describe('is initialized with', function() {
    it("the current deck of cards", function(){
      expect(shuffle.currentDeck).toEqual(testDeck);
    });
  });

  describe('when shuffling', function(){
    it('the default shuffle method does not return any two cards in sequence', function(){
      expect(shuffle.defaultShuffle()).toEqual([ Object({ value: 1, name: 'Ace', suit: 'Hearts', originalDeckPosition: 1 }), Object({ value: 3, name: 'Three', suit: 'Hearts', originalDeckPosition: 3 }), Object({ value: 2, name: 'Two', suit: 'Hearts', originalDeckPosition: 2 }) ]);
      expect(shuffle.defaultShuffle()).toEqual([ Object({ value: 2, name: 'Two', suit: 'Hearts', originalDeckPosition: 2 }), Object({ value: 1, name: 'Ace', suit: 'Hearts', originalDeckPosition: 1 }), Object({ value: 3, name: 'Three', suit: 'Hearts', originalDeckPosition: 3 }) ]);
      expect(shuffle.defaultShuffle()).toEqual([ Object({ value: 3, name: 'Three', suit: 'Hearts', originalDeckPosition: 3 }), Object({ value: 2, name: 'Two', suit: 'Hearts', originalDeckPosition: 2 }), Object({ value: 1, name: 'Ace', suit: 'Hearts', originalDeckPosition: 1 }) ]);
      expect(shuffle.defaultShuffle()).not.toEqual([ Object({ value: 1, name: 'Ace', suit: 'Hearts', originalDeckPosition: 1 }), Object({ value: 2, name: 'Two', suit: 'Hearts', originalDeckPosition: 2 }), Object({ value: 3, name: 'Three', suit: 'Hearts', originalDeckPosition: 3 }) ]);
      expect(shuffle.defaultShuffle()).not.toEqual([ Object({ value: 2, name: 'Two', suit: 'Hearts', originalDeckPosition: 2 }), Object({ value: 3, name: 'Three', suit: 'Hearts', originalDeckPosition: 3 }), Object({ value: 1, name: 'Ace', suit: 'Hearts', originalDeckPosition: 1 }) ]);
      expect(shuffle.defaultShuffle()).not.toEqual([ Object({ value: 3, name: 'Three', suit: 'Hearts', originalDeckPosition: 3 }), Object({ value: 1, name: 'Ace', suit: 'Hearts', originalDeckPosition: 1 }), Object({ value: 2, name: 'Two', suit: 'Hearts', originalDeckPosition: 2 }) ]);
    });
  });
});
