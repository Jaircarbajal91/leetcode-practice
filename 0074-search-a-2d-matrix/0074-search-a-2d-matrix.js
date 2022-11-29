/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let row = [];
    for (let i = 0; i < matrix.length; i++) {
        let currRow = matrix[i]
        let firstInRow = currRow[0]
        let lastInRow = currRow[currRow.length - 1]
        if (target >= firstInRow && target <= lastInRow) {
            row = matrix[i]
            break;
        }
    }
    let start = 0;
    let end = row.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (target < row[mid]) {
            end = mid - 1
        } else if (target > row[mid]) {
            start = mid + 1
        } else {
            return true
        }
    }
    return false
};