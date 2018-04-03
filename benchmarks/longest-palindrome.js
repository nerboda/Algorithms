/* eslint-disable */
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var path = '../solutions/longest-palindrome/solution.js';
var longestPalindrome = require(path);

suite
  .add('Longest Palindrome', function() {
    longestPalindrome('abccccdd');
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .run()
