describe('SingleRoll', function() {

  var singleRoll = new SingleRoll();
  var roll = jasmine.createSpyObj('roll', ['getRandomRoll']);

  beforeEach( function() {
    roll = {
      getRandomRoll: function(value) {
        var randomRoll;
        roll.randomRoll = value;
      }
    }
  });

  it('should be able to get a score for a roll', function() {

    roll.getRandomRoll(1);
    singleRoll.getScore(roll);
    expect(singleRoll.score).toEqual(1);

  });
});