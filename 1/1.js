// AoC 1.1

function calculateFrequency(input) {
    var list = input.split(", ");
    var result = 0;
    for(var i = 0; i < list.length; i++) {
        var v = list[i];
        if(isNaN(v) || v === "") {
            continue;
        }
        var op = v.slice(0,1);
        var val = parseInt(v.slice(1));
        if(op === "+") {
            result += val;
            continue;
        }
        result -= val;
    }

    return result;
}

module.exports = calculateFrequency;
