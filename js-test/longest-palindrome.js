/* eslint-disable */
var expect = require('expect.js');
var path = '../solutions/longest-palindrome/solution.js';
var longestPalindrome = require(path);

describe('longestPalindrome', function() {
  it('is case sensitive', function() {
    var actual = longestPalindrome('Aa');
    expect(actual).to.equal(1);
  });

  it('returns 7 for abccccdd', function() {
    var actual = longestPalindrome('abccccdd');
    expect(actual).to.equal(7);
  });

  it('returns 983 for this long string', function() {
    var input = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
    var actual = longestPalindrome(input);
    expect(actual).to.equal(983);
  });
});
