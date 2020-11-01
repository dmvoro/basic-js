module.exports = function countCats(matrix) {
  let count = 0;
  if (matrix.length == 0) {
    return count;
  }
  let catPattern = "^^";
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == catPattern) {
        count++;
      }
    }
  }
  return count;
};
