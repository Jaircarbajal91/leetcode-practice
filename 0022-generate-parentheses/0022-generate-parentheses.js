/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = []
    bfs('', 0, 0)
    return result;
    function bfs (string, open, close) {
        if (open === n && close === n) {
            result.push(string)
            return 
        }
        if (open !== n) {
            bfs(string + '(', open + 1, close)
        }
        if (open > close) {
            bfs(string + ')', open, close + 1)
        }
    }
};