require('./helper');

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
  get height() { return this.parsedInput.height; }
  get offsetX() { return this.parsedInput.offsetX; }
  get offsetY() { return this.parsedInput.offsetY; }
  get matrix() { return this._matrix; }
  set matrix(input) { this._matrix = input; }

  convertToMatrix() {
    for (var i = this.parsedInput.offsetY; i < this.parsedInput.offsetY + this.parsedInput.height; i++) {
      for (var j = this.parsedInput.offsetX; j < this.parsedInput.offsetX + this.parsedInput.width; j++) {
        this.matrix.push([i, j]);
      }
    }
  }

  getDoubles(claim) {
    var doubles = [];
    for(var i=0; i < this.matrix.length; i++) {
      var checkTarget = this.matrix[i];
      for(var j = 0; j < this.matrix.length; j++) {
        if(checkTarget.equals(claim.matrix[j])) {
          doubles.push(this.matrix[j]);
        }
      }
    }
    return doubles;
  }
}


module.exports = Claim; 