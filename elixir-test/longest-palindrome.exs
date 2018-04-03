Code.require_file("./elixir-test/test_helper.exs")
Code.require_file("./solutions/longest-palindrome/solution.exs")

defmodule LongestPalindromeTest do
  use ExUnit.Case

  test "it is case sensitive" do
    actual = MyString.longest_palindrome("Aa")
    assert actual === 1
  end

  test "it returns 7 for abccccdd" do
    actual = MyString.longest_palindrome("abccccdd")
    assert actual === 7
  end

  test "it returns 983 for this long string" do
    string = "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
    actual = MyString.longest_palindrome(string)
    assert actual === 983
  end
end
