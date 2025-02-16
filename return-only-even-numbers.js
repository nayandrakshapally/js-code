// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
const array = [1, 2, 3, 4, 5, 6, 7, 8];
function evenOnly(array) {
  const tempArray = [];
  array.forEach((item) => {
    if (item % 2 == 0) {
      tempArray.push(item);
    }
  });
  return tempArray;
}
console.log(evenOnly(array));

// item % 2 divides item by 2 and returns the remainder.
// If item % 2 == 0, it means item is evenly divisible by 2, making it an even number.
// If item % 2 != 0, it means item is not evenly divisible by 2, making it an odd number.

//will item/2 ==0 works? - No
// 4 / 2 == 0 is false (because 4 / 2 equals 2, not 0).
// 0 / 2 == 0 is true (but that's only because item is 0).
