/* eslint-disable */
// Find longest common substring:
//   - input: 2 strings
//   - output: longest common substring
//   - given 2 strings, find longest substring that occurs in each

// Algorithm:
//   - hash map of letters and indices in second string
//     - {'h' => [1, 5, 8], 'g' => [2, 4, 10]}
//   - for each letter in s1
//     - check if it's in hash map
//     - if it is, for each index in array
//       - counter = 0
//       - length = 0
//       - s2char = s1[outer index + counter]
//       - s2char = s2[inner index + counter]
//       - while s1char === s2char
//         - length++
//         - if length > longest update longest
//         - counter++
//   - return longest
// */

var letterIndices = function(s) {
  var indices = {};

  for (var i = 0; i < s.length; i++) {
    if (indices[s[i]]) {
      indices[s[i]].push(i);
    } else {
      indices[s[i]] = [i];
    }
  }

  return indices;
}

var longestCommonSubstring = function(s1, s2) {
  var longest = '';
  var lettersAndIndices = letterIndices(s2);
  var char, s1Index, s2Index, indexOfIndex, indices, s1Char, s2Char, counter, current;

  for (s1Index = 0; s1Index < s1.length; s1Index++) {
    char = s1[s1Index]
    indices = lettersAndIndices[char];

    if (indices) {
      for (indexOfIndex = 0; indexOfIndex < indices.length; indexOfIndex++) {
        s2Index = indices[indexOfIndex];

        current = char;
        counter = 1;

        s1Char = s1[s1Index + counter];
        s2Char = s2[s2Index + counter];

        while (s1Char && s1Char === s2Char) {
          current = current + s1Char;

          if (current.length > longest.length) {
            longest = current;
          }

          counter++;

          s1Char = s1[s1Index + counter];
          s2Char = s2[s2Index + counter];
        }
      }
    }
  }

  return longest;
}

module.exports = longestCommonSubstring;
