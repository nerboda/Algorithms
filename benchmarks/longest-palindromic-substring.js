/* eslint-disable */
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var path = '../problems/longest-palindromic-substring/solution.js';
var longestPalindromicSubstring = require(path);

suite
  .add('Initial Solution (long string)', function() {
    longestPalindromicSubstring('civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwar');
  })
  .add('Initial Solution (short string)', function() {
    longestPalindromicSubstring('babad');
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .run()
