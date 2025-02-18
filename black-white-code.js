for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("black & white"); // Multiple of both 3 and 5
    } else if (i % 5 === 0) {
      console.log("black"); // Multiple of 5
    } else if (i % 3 === 0) {
      console.log("white"); // Multiple of 3
    } else {
      console.log(i); // Not a multiple of 3 or 5
    }
  }
  
// Explanation:
// The for loop iterates from 1 to 100.
// If the number is divisible by both 3 and 5, it prints "black & white".
// If the number is divisible only by 5, it prints "black".
// If the number is divisible only by 3, it prints "white".
// Otherwise, it prints the number itself.
// This will output the desired results for numbers from 1 to 100 based on the conditions.