/* eslint-disable */
/*
rules:
- return 0 if string length 0
- initial:
  - start = 0
  - end = 2
  - length = 1
  - longest = 1
- current index is end - 1
- current char is char at current index
- if current char is not duplicate
  - length = end - start
  - if length > longest
    - longest = length
- if current char is duplicate
  - start get's set to previous index
  - end gets set to start + longest + 1
- set last index for current char to current index
*/
var lengthOfLongestSubstring = function(s) {
  var lastOccurrence = {};
  var longest = 1;
  var currentChar, lastIndex, i, j;

  for (i = 0, j = 0; j < s.length; j++) {
    currentChar = s.charAt(j);
    lastIndex = lastOccurrence[currentChar];

    if (lastIndex >= i) {
      i = lastOccurrence[currentChar] + 1;
    }

    lastOccurrence[currentChar] = j;
    longest = Math.max(longest, j - i + 1);
  }

  return longest;
};

// I was able to get my solution to outperform the optimized version (2,034,918 ops/sec vs 1,630,477 ops/sec) by making one small tweak. Rather than just checking to see if the character exists in the map, and setting `i` to the max of the current `i` or the previous index, I check to see if the index of the character in the map is >= the current `i`. If it is, I set `i` to the last occurrence index + 1. This allows me to jump an extra character, and also to bypass the if branch in cases where the hash key exists but is not within the window.

// lengthOfLongestSubstring('jbpnbwwd');

module.exports = lengthOfLongestSubstring;
