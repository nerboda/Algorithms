/* eslint-disable */
var expect = require('expect.js');
var path = '../problems/longest-common-substring/solution.js';
var longestCommonSubstring = require(path);

var bruteForcePath = '../problems/longest-common-substring/brute.js';
var bruteForce = require(bruteForcePath);

var dynamicPath = '../problems/longest-common-substring/dynamic.js';
var dynamic = require(dynamicPath);

describe('longestCommonSubstring', function() {
  it('finds matches at beginning of strings', function() {
    var actual = longestCommonSubstring('abacdfgdcaba', 'abacdgfdcaba');
    expect(actual).to.equal('abacd');
  });

  it('finds matches at end of strings', function() {
    var actual = longestCommonSubstring('string1', 'ring1');
    expect(actual).to.equal('ring1');
  });

  it('finds matches at different indexes', function() {
    var actual = longestCommonSubstring('hey there', 'her')
    expect(actual).to.equal('her');
  });

  it('works with spaces', function() {
    var actual = longestCommonSubstring('hi how are you', 'good how bout you')
    expect(actual).to.equal(' how ');
  });
});

describe('bruteForce', function() {
  it('finds matches at beginning of strings', function() {
    var actual = bruteForce('abacdfgdcaba', 'abacdgfdcaba');
    expect(actual).to.equal('abacd');
  });

  it('finds matches at end of strings', function() {
    var actual = bruteForce('string1', 'ring1');
    expect(actual).to.equal('ring1');
  });

  it('finds matches at different indexes', function() {
    var actual = bruteForce('hey there', 'her')
    expect(actual).to.equal('her');
  });

  it('works with spaces', function() {
    var actual = bruteForce('hi how are you', 'good how bout you')
    expect(actual).to.equal(' how ');
  });
});

describe('dynamic', function() {
  it('finds matches at beginning of strings', function() {
    var actual = dynamic('abacdfgdcaba', 'abacdgfdcaba');
    expect(actual).to.equal('abacd');
  });

  it('finds matches at end of strings', function() {
    var actual = dynamic('string1', 'ring1');
    expect(actual).to.equal('ring1');
  });

  it('finds matches at different indexes', function() {
    var actual = dynamic('hey there', 'her')
    expect(actual).to.equal('her');
  });

  it('works with spaces', function() {
    var actual = dynamic('hi how are you', 'good how bout you')
    expect(actual).to.equal(' how ');
  });
});
