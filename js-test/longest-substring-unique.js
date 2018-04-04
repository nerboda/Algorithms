/* eslint-disable */
var expect = require('expect.js');
var greedyPath = '../problems/longest-substring-unique/greedy.js';
var brutePath = '../problems/longest-substring-unique/brute.js';
var slidingWindowUnoptimizedPath = '../problems/longest-substring-unique/sliding-window-unoptimized.js';
var slidingWindowOptimizedPath = '../problems/longest-substring-unique/sliding-window-optimized.js';
var longestSubstringGreedy = require(greedyPath);
var longestSubstringBrute = require(brutePath);
var slidingWindowUnoptimized = require(slidingWindowUnoptimizedPath);
var slidingWindowOptimized = require(slidingWindowOptimizedPath);

describe('longestSubstringGreedy', function() {
  it('returns 1 for c', function() {
    var actual = longestSubstringGreedy('c');
    expect(actual).to.equal(1);
  });

  it('returns 1 for aa', function() {
    var actual = longestSubstringGreedy('aa');
    expect(actual).to.equal(1);
  });

  it('returns 2 for cdd', function() {
    var actual = longestSubstringGreedy('cdd');
    expect(actual).to.equal(2);
  });

  it('returns 2 for au', function() {
    var actual = longestSubstringGreedy('au');
    expect(actual).to.equal(2);
  });

  it('returns 3 for abcabcbb', function() {
    var actual = longestSubstringGreedy('abcabcbb');
    expect(actual).to.equal(3);
  });

  it('returns 3 for pwwkew', function() {
    var actual = longestSubstringGreedy('pwwkew');
    expect(actual).to.equal(3);
  });

  it('returns 1 for bbbbb', function() {
    var actual = longestSubstringGreedy('bbbbb');
    expect(actual).to.equal(1);
  });

  it('returns 10 for abcdefghijabcdef', function() {
    var actual = longestSubstringGreedy('abcdefghijabcdef')
    expect(actual).to.equal(10);
  });

  it('returns 2 for ababababababab', function() {
    var actual = longestSubstringGreedy('ababababababab');
    expect(actual).to.equal(2);
  });

  it('returns 4 for jbpnbwwd', function() {
    var actual = longestSubstringGreedy('jbpnbwwd');
    expect(actual).to.equal(4);
  });
});

describe('longestSubstringBrute', function() {
  it('returns 1 for c', function() {
    var actual = longestSubstringBrute('c');
    expect(actual).to.equal(1);
  });

  it('returns 1 for aa', function() {
    var actual = longestSubstringBrute('aa');
    expect(actual).to.equal(1);
  });

  it('returns 2 for cdd', function() {
    var actual = longestSubstringBrute('cdd');
    expect(actual).to.equal(2);
  });

  it('returns 2 for au', function() {
    var actual = longestSubstringBrute('au');
    expect(actual).to.equal(2);
  });

  it('returns 3 for abcabcbb', function() {
    var actual = longestSubstringBrute('abcabcbb');
    expect(actual).to.equal(3);
  });

  it('returns 3 for pwwkew', function() {
    var actual = longestSubstringBrute('pwwkew');
    expect(actual).to.equal(3);
  });

  it('returns 1 for bbbbb', function() {
    var actual = longestSubstringBrute('bbbbb');
    expect(actual).to.equal(1);
  });

  it('returns 10 for abcdefghijabcdef', function() {
    var actual = longestSubstringBrute('abcdefghijabcdef')
    expect(actual).to.equal(10);
  });

  it('returns 2 for ababababababab', function() {
    var actual = longestSubstringBrute('ababababababab');
    expect(actual).to.equal(2);
  });

  it('returns 4 for jbpnbwwd', function() {
    var actual = longestSubstringBrute('jbpnbwwd');
    expect(actual).to.equal(4);
  });
});

describe('slidingWindowUnoptimized', function() {
  it('returns 1 for c', function() {
    var actual = slidingWindowUnoptimized('c');
    expect(actual).to.equal(1);
  });

  it('returns 1 for aa', function() {
    var actual = slidingWindowUnoptimized('aa');
    expect(actual).to.equal(1);
  });

  it('returns 2 for cdd', function() {
    var actual = slidingWindowUnoptimized('cdd');
    expect(actual).to.equal(2);
  });

  it('returns 2 for au', function() {
    var actual = slidingWindowUnoptimized('au');
    expect(actual).to.equal(2);
  });

  it('returns 3 for abcabcbb', function() {
    var actual = slidingWindowUnoptimized('abcabcbb');
    expect(actual).to.equal(3);
  });

  it('returns 3 for pwwkew', function() {
    var actual = slidingWindowUnoptimized('pwwkew');
    expect(actual).to.equal(3);
  });

  it('returns 1 for bbbbb', function() {
    var actual = slidingWindowUnoptimized('bbbbb');
    expect(actual).to.equal(1);
  });

  it('returns 10 for abcdefghijabcdef', function() {
    var actual = slidingWindowUnoptimized('abcdefghijabcdef')
    expect(actual).to.equal(10);
  });

  it('returns 2 for ababababababab', function() {
    var actual = slidingWindowUnoptimized('ababababababab');
    expect(actual).to.equal(2);
  });

  it('returns 4 for jbpnbwwd', function() {
    var actual = slidingWindowUnoptimized('jbpnbwwd');
    expect(actual).to.equal(4);
  });
});

describe('slidingWindowOptimized', function() {
  it('returns 1 for c', function() {
    var actual = slidingWindowOptimized('c');
    expect(actual).to.equal(1);
  });

  it('returns 1 for aa', function() {
    var actual = slidingWindowOptimized('aa');
    expect(actual).to.equal(1);
  });

  it('returns 2 for cdd', function() {
    var actual = slidingWindowOptimized('cdd');
    expect(actual).to.equal(2);
  });

  it('returns 2 for au', function() {
    var actual = slidingWindowOptimized('au');
    expect(actual).to.equal(2);
  });

  it('returns 3 for abcabcbb', function() {
    var actual = slidingWindowOptimized('abcabcbb');
    expect(actual).to.equal(3);
  });

  it('returns 3 for pwwkew', function() {
    var actual = slidingWindowOptimized('pwwkew');
    expect(actual).to.equal(3);
  });

  it('returns 1 for bbbbb', function() {
    var actual = slidingWindowOptimized('bbbbb');
    expect(actual).to.equal(1);
  });

  it('returns 10 for abcdefghijabcdef', function() {
    var actual = slidingWindowOptimized('abcdefghijabcdef')
    expect(actual).to.equal(10);
  });

  it('returns 2 for ababababababab', function() {
    var actual = slidingWindowOptimized('ababababababab');
    expect(actual).to.equal(2);
  });

  it('returns 4 for jbpnbwwd', function() {
    var actual = slidingWindowOptimized('jbpnbwwd');
    expect(actual).to.equal(4);
  });
});
