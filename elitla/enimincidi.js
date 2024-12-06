function arePointsCoincident(x1, y1, x2, y2) {
  return x1 === x2 && y1 === y2;
}

// Example usage
console.log(arePointsCoincident(1, 2, 1, 2)); // true
console.log(arePointsCoincident(1, 2, 3, 4)); // false
