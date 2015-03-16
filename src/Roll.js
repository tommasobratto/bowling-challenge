var Roll = function() {
  this.randomRoll;
  this.lastRoll;
};

Roll.prototype.getRandomRoll = function() {
  this.setDefaultValues();
  this.lastRoll = this.randomRoll;
  this.randomRoll = Math.floor(Math.random() * (11 - this.lastRoll));
};

Roll.prototype.setDefaultValues = function() {
    if(!this.lastRoll && !this.randomRoll) { this.lastRoll = 0;  this.randomRoll = 0; }
};
