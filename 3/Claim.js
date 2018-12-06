class Claim {

    constructor(input) {
        this.input = input
        this.parsedInput = {};
        this.matrix = [];
        this.parseInput();
        this.convertToMatrix();
    }

    parseInput() {
        var offsets = this.input.slice(0, this.input.indexOf(':')).split(',')
        this.parsedInput.offsetX = parseInt(offsets[0]);
        this.parsedInput.offsetY = parseInt(offsets[1]);
        var dimensions = this.input.slice(this.input.indexOf(' ')).split('x');
        this.parsedInput.width = parseInt(dimensions[0]);
        this.parsedInput.height = parseInt(dimensions[1]);
    }

    get width() { return this.parsedInput.width; }
    get matrix() { return this._matrix; }
    set matrix(input) { this._matrix = input; }

    convertToMatrix() {
        // TODO: iterate over rows and fill an array of coordinates [x,y] that are occupied
        for(var i=this.parsedInput.offsetY; i<this.parsedInput.offsetY+this.parsedInput.height;i++) {
            for(var j=this.parsedInput.offsetX; j<this.parsedInput.offsetX+this.parsedInput.width;j++) {
                this.matrix.push([i,j]);
                // iterate over columns
                // if we're in offset: fill with [0]
            }
        }
    }

}

var claim = new Claim('3,3: 4x4')
console.log('width: ', claim.width);
console.log('matrix: ', claim.matrix);

module.exports = Claim; 