/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  const visited = new Set()
  let maxArea = 0

  for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
          if (grid[row][col] === 1 && !visited.has(JSON.stringify([row, col]))) {
              let queue = [[row, col]]
              let localCount = 0
              while(queue.length) {
                  const [row, col] = queue.shift()
                  const neighbors = findNeighbors([row, col], grid)
                  maxArea = Math.max(localCount, maxArea)
                  if (!neighbors.length) localCount++
                  neighbors.forEach(neighbor => {
                      if (!visited.has(JSON.stringify(neighbor))) {
                          visited.add(JSON.stringify(neighbor))
                          queue.push(neighbor)
                          localCount++
                      }
                  })
                  maxArea = Math.max(maxArea, localCount)
              }
          }
      }
  }

  return maxArea
};


const findNeighbors = (node, grid) => {
  const [row, col] = node
  const neighbors = [
      [row + 1, col],
      [row - 1, col],
      [row, col + 1],
      [row, col - 1]
  ]
  return neighbors.filter(neighbor => {
      const [row, col] = neighbor
      return grid[row] && grid[row][col] === 1
  })
}