describe('BowlingScoreboard', function() {
  var bowlingScoreboard = new BowlingScoreboard();
  var mockRoll = jasmine.createSpyObj('mockRoll', ['getRandomRoll'])

  beforeEach( function() {
    mockRoll = {
      getRandomRoll: function(value) {
        var randomRoll;
        mockRoll.randomRoll = value;
      }
    }
  });

  describe('in a single frame', function() {

    it('should get a score for a roll', function() {

      mockRoll.getRandomRoll(1);
      bowlingScoreboard.getRollScore(mockRoll);
      expect(bowlingScoreboard.roundScore).toEqual(1);

    });

    it('should add up the roll scores', function() {

      resetMatchScore(bowlingScoreboard);
      rollBall(bowlingScoreboard, mockRoll, 2);
      rollBall(bowlingScoreboard, mockRoll, 4);
      bowlingScoreboard.sumRolls();
      expect(bowlingScoreboard.totalScore).toEqual(6);

    });

    it('should know when the roll score is a spare', function() {

      resetMatchScore(bowlingScoreboard);
      rollBall(bowlingScoreboard, mockRoll, 8);
      rollBall(bowlingScoreboard, mockRoll, 2);
      bowlingScoreboard.sumRolls();
      expect(bowlingScoreboard.totalScore).toEqual(10);
      expect(bowlingScoreboard.getSpare()).toEqual(true);

    });

  }); 

});