/* eslint-disable */
var lengthOfLongestSubstring = function(s) {
  var length = s.length;
  var longest = 0;
  var lastOccurrence = {};

  for (var i = 0, j = 0; j < length; j++) {
    if (lastOccurrence[s.charAt(j)]) {
      i = Math.max(lastOccurrence[s.charAt(j)], i);
    }

    longest = Math.max(longest, j - i + 1);
    lastOccurrence[s.charAt(j)] = j + 1;
  }

  return longest;
}

module.exports = lengthOfLongestSubstring;
