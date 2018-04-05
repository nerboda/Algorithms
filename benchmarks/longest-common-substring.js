/* eslint-disable */
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var path = '../problems/longest-common-substring/solution.js';
var longestCommonSubstring = require(path);

var bruteForcePath = '../problems/longest-common-substring/brute.js';
var bruteForce = require(bruteForcePath);

var dynamicPath = '../problems/longest-common-substring/dynamic.js';
var dynamic = require(dynamicPath);

suite
  .add('Longest Common Substring', function() {
    longestCommonSubstring('abacdfgdcabasflkasdfjklsfjlksfljksafljksfljksafdljk', 'abacdgfdcabasfljkslkfjsjlkfsjlkfdsalkfjsaljkfaslfjkasdfljk');
  })
  .add('Brute Force', function() {
    bruteForce('abacdfgdcabasflkasdfjklsfjlksfljksafljksfljksafdljk', 'abacdgfdcabasfljkslkfjsjlkfsjlkfdsalkfjsaljkfaslfjkasdfljk');
  })
  .add('Dynamic Approach', function() {
    dynamic('abacdfgdcabasflkasdfjklsfjlksfljksafljksfljksafdljk', 'abacdgfdcabasfljkslkfjsjlkfsjlkfdsalkfjsaljkfaslfjkasdfljk');
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .run()
