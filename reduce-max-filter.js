const test = [1,2,3,4,5];
let sum = test.reduce((acc,cur)=>acc + cur,0);
let odd = test.filter((res)=>res%2);

console.log(Math.max(...test), odd);

const arr = [1, 2, 3];
const max = arr.reduce((a, b) => Math.max(a, b), 0);
console.log(max);