/*
  input:
    string with words separated by spaces
  output:
    object containing every word length and count of how many words per length

  
  'hi yes no' -> {'2': 2, '3': 1}

  Need to split the the sentence up into words and get the length of each word
  store that length in the result object or increment an existing count

  split string input into separate words
  define an empty result oject
  loop through each word
    add length to result object or increment count if length already exists
  return result object
*/

function wordSizes(sentence) {
  let result = {};
  let words = sentence.length > 0 ? sentence.split(' ') : [];

  words.forEach(word => {
    let wordLength = word.length

    if (result.hasOwnProperty(wordLength)) {
      result[wordLength] += 1;
    } else {
      result[wordLength] = 1;
    }
  });

  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}