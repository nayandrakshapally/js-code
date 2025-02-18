// Find the max count of consecutive 4’s in an array ?
function consecutive(array) {
  let maxCount = 0;
  let currentCount = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] == 4) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 0;
    }
  }
  return maxCount;
}
console.log(consecutive([1, 2, 3, 4, 4, 4, 4, 5, 6]));
