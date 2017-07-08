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
      expect(player.held_cards).toEqual([]);
    });
  });

  describe('can check for', function() {

    it("current player's name", function(){
      expect(player.getName()).toEqual('Test Name');
    });
  });
});
