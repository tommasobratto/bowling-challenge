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
      expect(bowlingScoreboard.roundScoreArray[0]).toEqual(1);

    });

    it('should add up the roll scores', function() {

      resetRoundScore(bowlingScoreboard);
      mockRoll.getRandomRoll(2);
      bowlingScoreboard.getRollScore(mockRoll);
      mockRoll.getRandomRoll(4);
      bowlingScoreboard.getRollScore(mockRoll);
      bowlingScoreboard.sumRolls();
      expect(bowlingScoreboard.totalScore[0]).toEqual(6);

    });

    it('should know when the roll score is a spare', function() {

      resetRoundScore(bowlingScoreboard);
      mockRoll.getRandomRoll(8);
      bowlingScoreboard.getRollScore(mockRoll);
      mockRoll.getRandomRoll(2);
      bowlingScoreboard.getRollScore(mockRoll);
      bowlingScoreboard.sumRolls();
      expect(bowlingScoreboard.totalScore[1]).toEqual(10);
      expect(bowlingScoreboard.getSpare()).toEqual(true);

    });

  }); 

});