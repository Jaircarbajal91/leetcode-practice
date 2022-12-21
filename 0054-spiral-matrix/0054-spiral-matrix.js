/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let result = []
    while(matrix.length) {
        matrix.length && countTop(matrix, result)
        matrix.length && countRight(matrix, result)
        matrix.length && countBottom(matrix, result)
        matrix.length && countLeft(matrix, result)
    }
    return result;
};

const countTop = (matrix, result) => {
    let row = matrix[0]
    if (!row.length) return
    result.push(...matrix[0])
    matrix.splice(0, 1)
}

const countRight = (matrix, result) => {
    for (let row of matrix) {
        let el = row.pop()
        if (el === undefined) return
        result.push(el)
    }
}

const countBottom = (matrix, result) => {
    let row = matrix.pop()
    if (!row.length) return
    result.push(...row.reverse())
}

const countLeft = (matrix, result) => {
    for (let i = matrix.length - 1; i >= 0; i--) {
        let el = matrix[i].shift()
        if (el === undefined) return
        result.push(el)
    }
}