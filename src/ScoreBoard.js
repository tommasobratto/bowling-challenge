var ScoreBoard = function() {
  this.rollScores = [[,],[,],[,],[,],[,],[,],[,],[,],[,],[,,]];
  this.frame = 0;
  this.roll = 0;
  this.frameScore;
  this.strike;
  this.spare;
  this.lastFrame;
  this.lastRoll;
};

ScoreBoard.prototype.addScore = function(roll) {
  if(roll.score === 10) {
    this.strike = true;
    this.rollScores[this.frame][this.roll] = roll.score;
  } else {
    this.strike = false;
    this.rollScores[this.frame][this.roll] = roll.score;
  };

  this.lastRoll = this.rollScores[this.frame][this.roll]
  this.setRoll();
};

ScoreBoard.prototype.sumFrameScore = function() {
  this.frameScore = this.rollScores[this.frame].reduce( function(firstRoll, secondRoll) {
    return firstRoll + secondRoll
  });

  if(this.frameScore === 10) {
    this.spare = true;
  } else {
    this.spare = false;
  };

  this.lastFrame = this.frameScore
  this.setFrame();
};

ScoreBoard.prototype.setFrame = function() {
  this.frame += 1;
};

ScoreBoard.prototype.setRoll = function() {
  if(this.roll === 1) {
    this.roll = 0;
  } else {
    this.roll = 1;
  };
};

ScoreBoard.prototype.addBonusScore = function() {
  this.frameScore = this.lastFrame + this.lastRoll
};
