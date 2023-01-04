/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set();
    
    while(true) {
        n = n.toString().split('').reduce((sum, num) => {
            sum += Math.pow(num, 2)
            return sum
        }, 0)
        if(n === 1) return true
        if (set.has(n)) break
        set.add(n)
    }
    return false;
}