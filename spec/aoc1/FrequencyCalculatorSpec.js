const calculateFrequency = require('../../1/1');

describe("Frequency calculator", function() {
    it("calculates the right frequency", function() {
        // Arrange
        var input = "+1, +1, +1";
        var expectedResult = 3;
        // Act
        var frequency = calculateFrequency(input)
        // Assert
        expect(frequency).toBe(expectedResult);
    })
})