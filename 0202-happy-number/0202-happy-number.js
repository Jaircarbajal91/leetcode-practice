/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let storage = {}
    while(n !== 1) {
        n = splitAndAddNumber(n)
        if (n in storage) return false
        storage[n] = n
    }
    return true
};

const splitAndAddNumber = n => n.toString().split('').reduce((result, num) => result += Math.pow(num, 2), 0)