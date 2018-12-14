Object.defineProperty(Array.prototype, "equals", {
    value: function equals(array) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] !== array[i]) {
                return false;
            }
        }
        return true;
    },
    writable: true,
    configurable: true
});