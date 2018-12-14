var ClaimChecker = require('../../3/ClaimChecker');
var Claim = require('../../3/Claim');

describe('ClaimChecker', function () {
    it('should be able to find all overlapping square inches for a list of claims', function () {
        // Arrange
        var testInput = ['1,3: 4x4', '1,3: 4x4'];
        var testee = new ClaimChecker(testInput);
        var expectedResult = 0;
        // Act
        var result = testee.doCheck();
        console.log('result: ', result);
        // Assert
        // expect(result).toEqual(expectedResult);
    });

    describe('parseInput', function () {
        it('should parse the input into the correct claim properties', function () {
            // Arrange
            var input = '1,3: 4x4';
            var testee = new Claim(input);
            // Act

            // Assert
            expect(testee.width).toBe(4);
            expect(testee.height).toBe(4);
            expect(testee.offsetX).toBe(1);
            expect(testee.offsetY).toBe(3);

        });

        describe('convertToMatrix', function () {
            it('should create an array of tuples with coordinates for a claim', function () {
                // Arrange
                var input = '1,3: 2x2';
                var testee = new Claim(input);
                // Act

                // Assert
                expect(testee.matrix).toEqual([
                    [3,1], [3,2], [4,1], [4,2]
                ]);

            });
        });

        describe('findDoubles', function() {
            it('should find coordinates that are common between two claims', function() {
                // Arrange
                var claim1 = new Claim('3,3: 2x2');
                var claim2 = new Claim('3,2: 2x2');
                var expectedResult = [ [ 4, 3 ], [ 4, 4 ] ];
                // Act
                var result = claim1.getDoubles(claim2);
                // Assert
                expect(result).toEqual(expectedResult);
            })
        })

    });


});