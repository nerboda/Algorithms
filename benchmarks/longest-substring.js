/* eslint-disable */
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;

var greedyPath = '../solutions/longest-substring/greedy.js';
var brutePath = '../solutions/longest-substring/brute.js';
var slidingWindowUnoptimizedPath = '../solutions/longest-substring/sliding-window-unoptimized.js';
var slidingWindowOptimizedPath = '../solutions/longest-substring/sliding-window-optimized.js';
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
