var SingleRoll = function() {
  this.score;
};

SingleRoll.prototype.getScore = function(roll) {
  this.score = roll.randomRoll;
};
