/*
200. Number of Islands
Medium

12197

308

Add to List

Share
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (grid.length <= 0) return 0;
  let count = 0,
    DIRECTIONS = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];
  let height = grid.length,
    width = grid[0].length;
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (grid[row][col] == "1") {
        // there is no chance '0' is part of an island
        traverse(row, col); // once this finishes, we've visited all lands of one island
        count++;
      }
    }
  }

  return count;

  // DFS Traversal
  function traverse(row, col) {
    if (
      row < 0 ||
      row >= height ||
      col < 0 ||
      col >= width ||
      grid[row][col] == "0"
    ) {
      return;
    }
    grid[row][col] = "0"; // turn land to water since we already visited it
    for (let dir of DIRECTIONS) {
      traverse(row + dir[0], col + dir[1]);
    }
  }
  // Time Complexity: O(m*n)
  // Space Complexity: O(m*n), if the entire grid is one island, it will take up m*n space in function call stack
};
