Code.require_file("./elixir-test/test_helper.exs")
Code.require_file("./solutions/longest-substring/solution.exs")

defmodule MyStringTest do
  use ExUnit.Case

  test "returns 1 for c" do
    actual = MyString.length_of_longest_substring("c")
    assert actual == 1
  end

  test "returns 1 for aa" do
    actual = MyString.length_of_longest_substring("aa")
    assert actual == 1
  end

  test "returns 2 for cdd" do
    actual = MyString.length_of_longest_substring("cdd")
    assert actual == 2
  end

  test "returns 2 for au" do
    actual = MyString.length_of_longest_substring("au")
    assert actual == 2
  end

  test "returns 3 for abcabcbb" do
    actual = MyString.length_of_longest_substring("abcabcbb")
    assert actual == 3
  end

  test "returns 3 for pwwkew" do
    actual = MyString.length_of_longest_substring("pwwkew")
    assert actual == 3
  end

  test "returns 1 for bbbbb" do
    actual = MyString.length_of_longest_substring("bbbbb")
    assert actual == 1
  end

  test "returns 10 for abcdefghijabcdef" do
    actual = MyString.length_of_longest_substring("abcdefghijabcdef")
    assert actual == 10
  end

  test "returns 2 for ababababababab" do
    actual = MyString.length_of_longest_substring("ababababababab")
    assert actual == 2
  end

  test "returns 4 for jbpnbwwd" do
    actual = MyString.length_of_longest_substring("jbpnbwwd")
    assert actual == 4
  end
end
