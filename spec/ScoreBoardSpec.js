describe('ScoreBoard', function() {

  var scoreBoard = new ScoreBoard();
  var singleRoll = jasmine.createSpyObj('singleRoll', ['addScore']);

  beforeEach( function() {
    singleRoll = {
      getScore: function(value) {
        var score;
        singleRoll.score = value;
      }
    }
  });

  it('should be able to sum up two roll scores into a frame score', function() {

    singleRoll.getScore(1);
    scoreBoard.addScore(singleRoll);
    singleRoll.getScore(1);
    scoreBoard.addScore(singleRoll);
    scoreBoard.sumFrameScore();
    expect(scoreBoard.frameScore).toEqual(2);

  });

  it('should be able to know if the frame score is a spare', function() {

    singleRoll.getScore(9);
    scoreBoard.addScore(singleRoll);
    singleRoll.getScore(1);
    scoreBoard.addScore(singleRoll);
    scoreBoard.sumFrameScore();
    expect(scoreBoard.spare).toBe(true);

  });

  it('should be able to know if the roll score is a strike', function() {

    singleRoll.getScore(10);
    scoreBoard.addScore(singleRoll);
    expect(scoreBoard.strike).toBe(true);

  });

  it('should know the last roll score', function() {

    singleRoll.getScore(1);
    scoreBoard.addScore(singleRoll);
    expect(scoreBoard.lastRoll).toEqual(1);

  });

  it('should know the last frame score', function() {

    singleRoll.getScore(1);
    scoreBoard.addScore(singleRoll);
    singleRoll.getScore(1);
    scoreBoard.addScore(singleRoll);
    scoreBoard.sumFrameScore();
    expect(scoreBoard.lastFrame).toEqual(2);

  });

});
