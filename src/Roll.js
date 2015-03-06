var Roll = function() {
  this.randomRoll;
};

Roll.prototype.getRandomRoll = function() {
  this.randomRoll = Math.floor((Math.random() * 11) + 0);
};

