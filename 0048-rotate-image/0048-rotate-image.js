/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const transposed = transpose(matrix)
    console.log(transposed)
    transposed.forEach(row => {
        row.reverse()
    })
    return transposed
};

const transpose = matrix => {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = row + 1; col < matrix.length; col++) {
            [matrix[col][row], matrix[row][col]] = [matrix[row][col], matrix[col][row]]
        }   
    }
    return matrix
}