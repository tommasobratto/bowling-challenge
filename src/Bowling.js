var BowlingScoreboard = function() {
this.rollScore;
};

BowlingScoreboard.prototype.getRollScore = function(roll) {
  this.rollScore = roll.randomRoll;
};