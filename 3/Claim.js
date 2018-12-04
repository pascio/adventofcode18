class Claim {

    constructor(input) {
        this.input = input
        this.parseInput();
        this.convertToMatrix(input);
    }

    parseInput() {
        var offsets = this.input.slice(0, this.input.indexOf(':')).split(',')
        this.offsetX = offsets[0];
        this.offsetY = offsets[1];
        var dimensions = this.input.slice(this.input.indexOf(' ')).split('x');
        this.width = dimensions[0];
        this.height = dimensions[1];
    }

    get width() {
        return 4;
    }

    set width(width) {
    }

    convertToMatrix(input) {
        // sample input: 1,3: 4x4

    }

}

var claim = new Claim('3,3: 4x4')

module.exports = Claim;