/* eslint-disable */
// Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

// This is case sensitive, for example "Aa" is not considered a palindrome here.

// Note:
// Assume the length of given string will not exceed 1,010.

// Example:

// Input:
// "abccccdd"

// Output:
// 7

// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

/*
Understand:
  - input: String
  - output: Number - length of longest palindrome that can be built with characters
  - can assume input length less than 1010
  - case sensitive

Characteristics of a palindrome:
  - center letter is allowed to occur only once
  - all other letters must occur at least twice
  - all other letters always occur even number of times

Algorithm:
  - store hash map of letter counts
  - initialize oddValueUsed = false
  - initialize longest = 0
  - walk through hash key/val:
    - if current value is odd
      - if oddValueUsed is true
        - increment longest by current - 1
      - else
        - increment longest by current
        - set oddValueUsed to true
    - else just increment longest by current value
*/

var charCounts = function(s) {
  var counts = {};

  for (var i = 0; i < s.length; i++) {
    if (counts[s[i]]) {
      counts[s[i]]++;
    } else {
      counts[s[i]] = 1;
    }
  }

  return counts;
}

var longestPalindrome = function(s) {
  var counts = charCounts(s);
  var longest = 0;

  Object.values(counts).forEach(function(occurrences) {
    if (occurrences % 2 !== 0 && longest % 2 !== 0) {
      longest += occurrences - 1;
    } else {
      longest += occurrences;
    }
  });

  return longest;
};

module.exports = longestPalindrome;
