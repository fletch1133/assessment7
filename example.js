///NUMBER ONE\\\\
const addToZero = (arr) => {
    let object = {}
    for (let i = 0; i < arr.length; i++) {
      
     if (object[-arr[i]]) {
        return true
      } else {
        object[arr[i]] = arr[i]
      }
    }
    return false
  }
  console.log(addToZero[1, 2, 3])
  console.log(addToZero[4, 5, 2, 9])

 ///time complexity: O(n)
  //   space complexity: O(n)


///NUMBER TWO\\\
function hasUniqueChars(word) {
    const seen = new set();
    for (let char of word) {
      if (seen.has(char)) {
        return false;
     }
     seen.add(char);
    }
   return true;
  }
  
console.log(hasUniqueChars('racecar'));
console.log(hasUniqueChars('man'));

////Time Complexity = O(n^2)
///Space Complexity = O(n)


///NUMBER THREE\\\
  const isPangram = str => {
    str = str.toLowerCase
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for(let i = 0; i < alphabet.length; i++){
        if(!str.indexOf(alphabet[i]) === -1)
        return false
    }
    return true
  }

  console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
  console.log(isPangram('Two driven jocks help fax my big quiz.'));
  console.log(isPangram('I do not enjoy writing pangrams.'));

  //Time Complexity = O(n^2)
  //Space Complexity = O(1)


///NUMBER FOUR\\\
function findLongestWord(words) {
    let longestWordLength = 0;
    for (let word of words) {
      if (word.length > longestWordLength) {
        longestWordLength = word.length;
      }
    }
    return longestWordLength;
  }
  
  const words = ['apple', 'banana', 'pear', 'watermelon'];
  console.log(findLongestWord(words));

  //Time Complexity = O(n)
  //Space Complexity= O(n)
  