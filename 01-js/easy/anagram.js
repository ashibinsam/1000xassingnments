/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length) {
    return false;
  }
  for(let char1 in str1) {

    let isPresent = false;

    for(let char2 in str2) {

      if(char1 == char2) {
        isPresent = true;
      }

    }
    if(isPresent ==false) {
      return false;
    }
    else {
      isPresent = false;
    }
  }
  return true;
}

module.exports = isAnagram;
