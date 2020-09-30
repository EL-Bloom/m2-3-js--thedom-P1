// Exercise 9
//
// Part 1 - Write
// ---------------
// Write a function that accepts a string of multiple words and returns the longest word in the string.

// - If the input string is empty then return an empty string.
// - If multiple words have the same length, return the last one.

// Example
//   longestWord("hey hello morning") returns "morning"

// HINTS:
//  - You'll need to use the split string method
//  - `forEach` might be helpful

function longestWord(sentence) {
  let splitString = sentence.split(" "); 
  let longest = 0; 
  let word;  
  if (sentence === "") { 
    return "";
  } 

   
  splitString.forEach(function(splitString) { 
    if (longest < splitString.length) { 
      longest = splitString.length; 
      word= splitString; 
      if (word.length === word.length) { 
        // how do verify if two elements are the same length and how do I choose the last one, which isn't necessarily the last one in the array?
         
      }
    }  


      
    
  }); 
  return word;
}

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = longestWord;
