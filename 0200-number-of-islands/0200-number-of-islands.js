/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const visited = new Set()
    let counter = 0
    for (let i = 0; i < grid.length; i++) {
        let row = grid[i]
        for (let j = 0; j < row.length; j++) {
            if (!visited.has([i, j].toString()) && grid[i][j] === '1') {
                visited.add([i, j].toString())
                counter++
                let queue = [[i, j]]
                while(queue.length) {
                    const curr = queue.shift()
                    const [row, col] = curr
                    const neighbors = findNeighbors([row, col], grid)
                    neighbors.forEach(neighbor => {
                        if (!visited.has(neighbor.toString())) {
                            visited.add(neighbor.toString())
                            queue.push(neighbor)
                        }
                    })
                }
            }
        }     
    } 
    return counter
};

const findNeighbors = (node, matrix) => {
    const [row, col] = node
    
    const neighbors = [
        [row + 1, col], // north
        [row - 1, col], // south
        [row, col + 1], // east
        [row, col - 1], // west
    ]
    return neighbors.filter(neighbor => {
        const [row, col] = neighbor
        return matrix[row] && matrix[row][col] === '1'
    })
}