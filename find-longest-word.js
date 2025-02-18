// Program to find longest word in a given sentence ?
function findLongestWord(sentence) {
  let wordsArray = sentence.split(" ");
  let longestWord = "";
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > longestWord.length) {
      longestWord = wordsArray[i];
    }
  }
  return longestWord;
}
console.log(findLongestWord("Hey there Nayan"));
