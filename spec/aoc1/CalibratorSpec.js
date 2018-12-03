var Calibrator = require('../../1/2');

describe('Calibrator', function() {
    it('it finds the first frequency to appear twice', function() {
        // Arrange
        var testee = new Calibrator();
        var input = '+7, +7, -2, -7, -4';
        var expectedResult = 14;
        // Act 
        var result = testee.run(input);
        // Assert
        expect(result).toBe(expectedResult);
    })
})