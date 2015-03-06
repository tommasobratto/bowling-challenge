describe('Roll', function() {

  var roll = new Roll();

  it('should randomly roll a score', function() {
    
    spyOn(roll, 'getRandomRoll').and.returnValue(1);
    expect(roll.getRandomRoll()).toEqual(1);

  });

});