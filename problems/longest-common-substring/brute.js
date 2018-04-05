/* eslint-disable */

/*
Brute force method for finding longest common substring:
  - for each letter in string one
    - walk through string 2 until a match is found
    - if match is found
      - while each subsequent letter matches, countinue checking next letter and concating matched string
        - if current matched string is longer than longest string, make it the longest string

Pseudo code:
  - longest string = ''
  - for each letter in string 1
    - for each letter in string 2
      - if string 1 letter matches string 2 letter
        - counter = 0
        - current string = string 1 letter
        - while letter in string 1 at index current + counter equals letter in string 2 at index current + counter
          - add current char to current string
            - if it's longer than longest, make it new longest
            - increment the counter and continue
  - return longest string

*/
var longestCommonSubstring = function(s1, s2) {
  var longest = '';
  var char, s1Index, s1Char, s2Char, counter, current;

  for (s1Index = 0; s1Index < s1.length; s1Index++) {
    for (s2Index = 0; s2Index < s2.length; s2Index++) {
      current = '';
      counter = 0;

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

  return longest;
}

module.exports = longestCommonSubstring;
