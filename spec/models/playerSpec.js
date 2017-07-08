describe('Player', function() {
  var player = new Player('Test Name', 1);

  it("exists", function(){
    expect(player).toBeDefined();
  });

  describe('default values on initialization', function() {

    it("has a name", function(){
      expect(player.name).toEqual('Test Name');
    });

    it("has an id", function(){
      expect(player.id).toEqual(1);
    });

    it("has an empty array for currently held cards", function(){
      expect(player.cards_held).toEqual([]);
    });
  });

  describe('can check for', function() {

    it("current player's name", function(){
      expect(player.getName()).toEqual('Test Name');
    });

    it("current player's id", function(){
      expect(player.getId()).toEqual(1);
    });

    it("current player's held cards", function(){
      expect(player.showCards()).toEqual([]);
    });
  });
});
