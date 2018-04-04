/* eslint-disable */
// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example:

// Input: "babad"

// Output: "bab"

// Note: "aba" is also a valid answer. 

// Example:

// Input: "cbbd"

// Output: "bb"

/*
Understand the Problem:
  - input: string
  - output: string, longest substring of s that's a palindrome
  - assume that s length is never more than 1000
  - if there are multiple longest palindromic substrings with the same length, any of them are valid answer

Algorithm:
  - Navigating string:
    - let n = 0
    - slice substring which is length len(s) - n
    - slide that window through the string until end is reached
      - on first pass this will be once because n will be 0, meaning substring is full string
    - increment n and repeat
      - so next pass, n = 1
      - this means we'll start with substring that starts with index 0 and ends one char short of end of string
        - slide that substring by incrementing both start and end indexes
        - do this until end of string is reached
        - then repeat process
  - Checking if palindrome:
    - use for loop to walk forward from start and backward from end of string at once
    - compare chars at both indexes
    - return false if they don't match
    - return true at the end

Pseudo code:
  - let n = 0
  - for loop to increment n (while n <= string length)
    - let length = string length - n
    - let start index = 0
    - another for loop to increment start index (while start index + length is less than string length)
      - substring = string.substr(start, length)
      - if substring is palindrome, return it right there
  - return "" at end
    - if this is reached, it means the input was empty

*/

var isPalindrome = function(s) {
  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i) !== s.charAt(s.length - (i + 1))) {
      return false;
    }
  }

  return true;
}

var longestPalindrome = function(s) {
  var subtraction, length, startIndex, substring;

  for (subtraction = 0; subtraction <= s.length; subtraction++) {
    length = s.length - subtraction;

    for (startIndex = 0; (startIndex + length) <= s.length; startIndex++) {
      substring = s.substr(startIndex, length);

      if (isPalindrome(substring)) return substring;
    }
  }

  return '';
};

module.exports = longestPalindrome;
