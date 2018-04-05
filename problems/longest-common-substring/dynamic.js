/* eslint-disable */

/* 
Dynamic Programming Approach:

The dynamic programming approach uses 2 pointers to walk through each possible combination of chars from string a and b, and builds up a cache of the longest possible substring ending at each index. It then uses the data in the cache for the previous index to quickly compute what the length of the longest possible substring is at the current index.

It then keeps a running record of the longest seen so far and updates the output string if the current is the longest.

Step by Step Algorithm:
- longest string = ''
  - build a 2 dimensional cache array for tracking longest substring lengths at each index
    - cache = [...b length][...a length]
- use nested for loops to walk through both strings
  - i = 0
  - outer for loop
    - j = 0
    - inner for loop
    - if string a[i] === string b[j]
      - if either i or j === 0
        - set cache[j][i] = 1
      - else
        - set cache[j][i] = cache[j - 1][i - 1] + 1
        - if cache[j][i] length > longest length
          - longest = string a substring(i - cache[j][i].length + 1, i + 1)
- return longest string
*/

var nestedArray = function(n) {
  var array = [];

  for (var i = 0; i < n; i++) {
    array[i] = [];
  }

  return array;
}

var longestCommonSubstring = function(a, b) {
  var longest = '';
  var cache = nestedArray(b.length);

  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        if (i === 0 || j === 0) {
          cache[j][i] = 1;
        } else {
          cache[j][i] = cache[j - 1][i - 1] + 1;
        }

        if (cache[j][i] > longest.length) {
          longest = a.substring(i - cache[j][i] + 1, i + 1);
        }
      } else {
        cache[j][i] = 0;
      }
    }
  }

  return longest;
}

module.exports = longestCommonSubstring;
