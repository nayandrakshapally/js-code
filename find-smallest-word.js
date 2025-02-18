// Find the smallest word in a given sentence ?
function findSmallWord(sentence) {
  var wordsArray = sentence.split(" ");
  var smallWord = wordsArray[0];
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length <= smallWord.length) {
      smallWord = wordsArray[i];
    }
  }
  return smallWord;
}
console.log(findSmallWord("This is small I"));
