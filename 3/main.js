
var Claim = require('./Claim');

var claim1 = new Claim('3,3: 2x2');
var claim2 = new Claim('3,2: 2x2');
console.log('width1: ', claim1.width);
console.log('matrix1: ', claim1.matrix);
console.log('matrix2: ', claim2.matrix);
console.log('compare: ', claim1.getDoubles(claim2));



console.log([1,2,3,4,2].equals([1,2,3,4,2]));