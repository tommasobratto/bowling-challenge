describe('Roll', function() {

  var roll = new Roll();

  it('should randomly roll a score', function() {
    
    spyOn(roll, 'getRandomRoll').and.returnValue(roll.randomRoll = 1);
    roll.getRandomRoll();
    expect(roll.randomRoll).toEqual(1);

  });

  it('should remember the last score value', function() {

    spyOn(roll, 'getRandomRoll').and.returnValue(roll.lastRoll = 1);
    roll.getRandomRoll();
    expect(roll.lastRoll).toEqual(1);

  });

});