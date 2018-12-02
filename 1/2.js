// AoC 1.2

class Calibrator {

    constructor() {
        this.searching = true;
        this.result = 0;
        this.resultList = [0];
    }

    runFreqs() {
        for(var i = 0; i < this.list.length; i++) {
            var v = this.list[i];
            if(isNaN(v) || v === '') {
                continue;
            }
            var op = v.slice(0, 1);
            var val = parseInt(v.slice(1));
            if(op === '+') {
                this.result += val;
            }
            else {
                this.result -= val;
            }
            if(this.resultList.includes(this.result)) {
                this.searching = false;
                break;
            }
            this.resultList.push(this.result);
        }
    } 

    run(input) {
        this.list = input.split(', ');
        while(this.searching) {
            this.runFreqs();
        }
        return(this.result);
    }

}

module.exports = Calibrator;