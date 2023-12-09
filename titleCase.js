const titleCase = function(sentence) {
 
  let lowerCased = sentence.toLowerCase();
  
  let words = lowerCased.split(' ');
  
  let titleCasedWords = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  
  let titleCasedSentence = titleCasedWords.join(' ');
  
  return titleCasedSentence;
};
console.log(titleCase("this is an example"));
console.log(titleCase("test"));
console.log(titleCase("i r cool"));
console.log(titleCase("WHAT HAPPENS HERE"));
console.log(titleCase(""));
console.log(titleCase("A"));