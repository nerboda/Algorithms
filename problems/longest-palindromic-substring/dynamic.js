/* eslint-disable */
/*

# Optimizing Brute Force Method with Dynamic Programming

By caching the results of every isPalindrome check in a hash with the start and end index used as the key, I can check to see if the current substring minus the first and last characters was a palindrome. If it was, and the first and last letters are also equal, it must be a palindrome.

This cuts the runtime from O(n^3) to O(n^2)

Outline:
  - need a hash to store the results of isPalindrome checks
    - keys will = i + comma + j: { '1,4' => true }
  - for each i + j index combo, check to see if there's a key in the hash...
    - ...of i+1,j-1. If there is, check to see if current start and end chars are equal
      - if they're equal, the current string must be a palindrome
        - set current key in hash to true
        - from there do the normal check to see if it's longer than previous
    - if there's no key in the hash, or it returns false
  - rather than checking every index j for every index i, we'll use i as the length of the substring
    - we'll then increment j as our starting index so we slide the substring
      - this allows us to first get everything single letter palindrome, then every 2 letter palindrome etc.
        - this allows us to use our cache effectively

Pseudo code:
  - longest = ''
  - lookups = {}
  - for i in s1
    - for j in s1
      - substring = s.substring(i, j+1)
      - previousKey = String(i + 1) + ',' + String(j - 1)
      - currentKey = String(i) + ',' + String(j)
      - if lookups[previousKey]
        - if s[i] === s[j]
          - lookups[currentKey] = true
          - if substring length > longest length
            - longest = substring
      - else if is palindrome
        - lookups[currentKey] = true
        - if substring length > longest length
          - longest = substring
  - return longest

*/

var isPalindrome = function(s) {
  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i) !== s.charAt(s.length - (i + 1))) {
      return false;
    }
  }

  return true;
}

var longestPalindromicSubstring = function(s) {
  var longest = '';
  var lookups = {};
  var substring, currentKey, previousKey;

  for (var i = 1; i <= s.length; i++) {
    for (var j = 0; j < s.length; j++) {
      substring = s.substr(j, i);
      previousKey = String(j + 1) + '.' + String(i - 2);
      currentKey = String(j) + '.' + String(i);

      if (lookups[previousKey] && s[j] === s[j + i - 1]) {
        lookups[currentKey] = true;

        if (substring.length > longest.length) {
          longest = substring;
        }
      } else if (isPalindrome(substring)) {
        lookups[currentKey] = true;

        if (substring.length > longest.length) {
          longest = substring;
        }
      }
    }
  }

  return longest;
};

module.exports = longestPalindromicSubstring;
