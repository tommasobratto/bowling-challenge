var TotalScore = function() {
  this.value;
  this.rollScores = [[,],[,],[,],[,],[,],[,],[,],[,],[,],[,,]];
  this.frame = 0;
  this.roll = 0;
  this.frameScore;
  this.strike;
  this.spare;
  this.lastFrame;
  this.lastRoll;
};

TotalScore.prototype.addScore = function(roll) {
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

TotalScore.prototype.sumFrameScore = function() {
  this.lastFrame = this.frame
  this.frameScore = this.rollScores[this.frame].reduce( function(firstRoll, secondRoll) {
    return firstRoll + secondRoll
  });
  if(this.frameScore === 10) {
    this.spare = true;
  } else {
    this.spare = false;
  }
  this.setFrame();
};

TotalScore.prototype.setFrame = function() {
  this.frame += 1;
};

TotalScore.prototype.setRoll = function() {
  if(this.roll === 1) {
    this.roll = 0;
  } else {
    this.roll = 1;
  };
};
