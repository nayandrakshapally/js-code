function add(x) {
  return function (y) {
    return x + y;
  };
}

// Example usage:
let test = add(5); // test is now a function
console.log(test(7)); // Outputs: 12
console.log(test(8)); // Outputs: 13

// Explanation:
// The add function takes a parameter x.
// It returns another function that takes a parameter y.
// When you call test = add(5), test becomes a function that takes one argument (y) and returns the sum of x (which is 5) and y.
// So, test(7) returns 5 + 7 = 12, and test(8) returns 5 + 8 = 13.

// This pattern is known as function currying.
