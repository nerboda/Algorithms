/* eslint-disable */
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var greedyPath = '../problems/longest-substring-unique/greedy.js';
var brutePath = '../problems/longest-substring-unique/brute.js';
var slidingWindowUnoptimizedPath = '../problems/longest-substring-unique/sliding-window-unoptimized.js';
var slidingWindowOptimizedPath = '../problems/longest-substring-unique/sliding-window-optimized.js';
var longestSubstringGreedy = require(greedyPath);
var longestSubstringBrute = require(brutePath);
var slidingWindowUnoptimized = require(slidingWindowUnoptimizedPath);
var slidingWindowOptimized = require(slidingWindowOptimizedPath);

suite
  .add('Greedy', function() {
    longestSubstringGreedy('abcabcabc');
  })
  .add('Brute Force', function() {
    longestSubstringBrute('abcabcabc');
  })
  .add('Sliding Window Unoptimized', function() {
    slidingWindowUnoptimized('abcabcabc');
  })
  .add('Sliding Window Optimized', function() {
    slidingWindowOptimized('abcabcabc');
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .run()
