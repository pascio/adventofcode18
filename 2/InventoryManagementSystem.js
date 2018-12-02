class Ims {

    constructor() {}

    calculateChecksum(list) {
        var doubles = 0;
        var triples = 0;
        for(var i=0; i<list.length; i++) {
            var result = this.checkMultiples(list[i]);
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


    compareStrings(string1, string2) {
        var a1 = string1.split('');
        var a2 = string2.split('');
        var delta = [];
        a1.forEach((e,i) => {
            if(e !== a2[i]) {
                delta.push(i);
            }
        });
        return delta;
    }

    findSimilarBoxes(list) {
        for(var i=0; i<list.length; i++) {
            var target = list[i];
            for(var j=0; j<list.length; j++) {
                var delta = this.compareStrings(target, list[j])
                if(delta.length === 1) {
                    var charPos = delta[0];
                    var match = target.split('')
                    match.splice(charPos,1)
                    return match.join('');
                }
            }
        }
    }
}

module.exports = Ims;