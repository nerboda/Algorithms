/* eslint-disable */
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var path = '../problems/longest-palindromic-substring/solution.js';
var longestPalindromicSubstring = require(path);

var dynamicPath = '../problems/longest-palindromic-substring/dynamic.js';
var dynamic = require(dynamicPath);

suite
  .add('Initial Solution (long string)', function() {
    longestPalindromicSubstring('civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwar');
  })
  .add('Initial Solution (short string)', function() {
    longestPalindromicSubstring('babad');
  })
  .add('Dynamic (long string)', function() {
    dynamic('civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwar');
  })
  .add('Dynamic (short string)', function() {
    dynamic('babad');
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .run()
