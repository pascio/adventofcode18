class Ims {

    constructor() {}

    calculateChecksum(input) {
        var doubles = 0;
        var triples = 0;
        for(var i=0; i<input.length; i++) {
            var result = this.checkMultiples(input[i]);
            if(result[0] === true) {
                doubles++;
            }
            if(result[1] === true) {
                triples++;
            }
        }
        return doubles*triples;
    }

    checkMultiples(sequence) {
        var checked = [];
        var result = [false,false];
        for(var i=0; i<sequence.length; i++){
            var char = sequence.slice(i,i+1);
            if(checked.includes(char)) {
                continue;
            }
            checked.push(char);
            var re = new RegExp(char, 'g')
            var count = (sequence.match(re) || []).length;
            if(count === 2) {
                result[0] = true;
            }
            if(count === 3) {
                result[1] = true;
            }
        }
        return result;    
    }
}

module.exports = Ims;