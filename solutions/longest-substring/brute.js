/* eslint-disable */
var allUnique = function(string) {
  var counts = {};

  for (var i = 0; i < string.length; i++) {
    if (counts[string[i]]) {
      return false;
    }

    counts[string[i]] = 1;
  }

  return true;
}

var lengthOfLongestSubstring = function(s) {
  var longest = 0;

  for (var o = 0; o < s.length; o++) {
    for (var i = o; i < s.length; i++) {
      var string = s.slice(o, i + 1);

      if (allUnique(string) && string.length > longest) {
        longest = string.length;
      }
    }
  }

  return longest;
}

module.exports = lengthOfLongestSubstring;
