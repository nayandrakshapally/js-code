// How to check whether a string is palindrome or not ?
function checkPalindrome(string) {
  const stringReverse = string.split("").reverse().join("");
  if (string.toLowerCase() === stringReverse.toLowerCase()) {
    return true;
  }
  return false;
}
console.log(checkPalindrome("nayan"));
