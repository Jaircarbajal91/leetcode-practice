/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {   
    let map = {}
    for (let letter of s) {
        if (letter in map) map[letter]++
        else map[letter] = 1
    }
    let result = ''
    let entries = Object.entries(map).sort((a, b) => b[1] - a[1]).reduce((result, arr) => {
        let letter = arr[0]
        let frequency = arr[1]
        result += letter.repeat(frequency)
        return result
    }, '')
    return entries
};