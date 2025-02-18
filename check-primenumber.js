// Write a JavaScript function to check if a given number is prime.
function isPrime(num) {
  if (num <= 1) return false; // 1 and numbers less than 1 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // Check up to the square root of the number
    if (num % i === 0) return false; // If divisible by any number, it's not prime
  }
  return true; // If no divisors found, it's prime
}

console.log(isPrime(7));
