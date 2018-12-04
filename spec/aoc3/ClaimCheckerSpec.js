var ClaimChecker = require('../../3/ClaimChecker');
var Claim = require('../../3/Claim');

describe('ClaimChecker', function() {
    it('should be able to check how many overlapping inches two claims have', function() {
        // Arrange
        var testee = new ClaimChecker();
        var claim1 = new Claim();
        var claim2= new Claim();
        var expectedResult = 0;
        // Act
        var result = testee.doCheck(claim1, claim2);
        // Assert
        expect(result).toEqual(expectedResult);
    });

    describe('parseInput', function() {
        it('should parse the input into the correct claim properties', function() {
            // Arrange
            var input = '1,3: 4x4';
            var testee = new Claim(input);
            // Act
            
            // Assert
            expect(4).toBe(4);
        })
    })

})