/* eslint-disable */
var expect = require('expect.js');
var path = '../problems/longest-palindromic-substring/solution.js';
var longestPalindromicSubstring = require(path);

describe('longestPalindromicSubstring', function() {
  it('returns bab or aba for babad', function() {
    var actual = longestPalindromicSubstring('babad');
    expect(['bab', 'aba']).to.contain(actual);
  });

  it('returns bb for cbbd', function() {
    var actual = longestPalindromicSubstring('cbbd');
    expect(actual).to.equal('bb');
  });

  it('returns ranynar for this long string', function() {
    var actual = longestPalindromicSubstring('civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth');
    expect(actual).to.equal('ranynar');
  });
});
