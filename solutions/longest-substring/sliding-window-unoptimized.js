/* eslint-disable */
var lengthOfLongestSubstring = function(s) {
  var length = s.length;
  var longest = 0, start = 0, end = 0;
  var unique = {};

  while (start < length && end < length) {
    if (!unique[s.charAt(end)]) {
      unique[s.charAt(end)] = true;
      end++;
      longest = Math.max(longest, end - start);
    } else {
      unique[s.charAt(start)] = undefined;
      start++;
    }
  }

  return longest;
}

module.exports = lengthOfLongestSubstring;
