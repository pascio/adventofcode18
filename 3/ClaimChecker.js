var Claim = require('./Claim');

class ClaimChecker {

    constructor(claims) {
        this.claims = claims;
        this.overlaps = [];
    }

    get overlaps() { return this._overlaps; }
    set overlaps(input) { this._overlaps = input; }

    doCheck() {
        console.log('check!')
        for(var i = 0; i < this.claims; i++) {
            claim1 = new Claim(this.claims[i]);
            for(var j = i+1; j < this.claims; j++) {
                claim1 = new Claim(this.claims[j]);
                claimOverlap = claim1.getDoubles(claim2);
                console.log('ovlerap: ', claimOverlap);
                if(claimOverlap.length > 0) {
                    this._overlaps.push(claimOverlap);
                }
            }
        }
        return this._overlaps;
    }

}

module.exports = ClaimChecker;