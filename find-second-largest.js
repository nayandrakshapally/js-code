// Find the 2nd largest element from a given array ?
function findSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest; // Update second largest
      largest = arr[i]; // Update largest
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i]; // Update second largest if it's not equal to the largest
    }
  }

  return secondLargest;
}

const arrays = [100, 20, 112, 22];
console.log(findSecondLargest(arrays));

// Other approach
function secondLargest(arr) {
  // Remove duplicates
  let uniqueArr = [...new Set(arr)];

  // Sort in descending order
  uniqueArr.sort((a, b) => b - a);

  // Return the second largest element
  return uniqueArr.length > 1 ? uniqueArr[1] : null; // Handle cases where there is no second largest
}
