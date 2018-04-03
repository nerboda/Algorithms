defmodule MyString do
  def longest_palindrome(string) do
    counts =
      string
      |> String.graphemes()
      |> Enum.reduce(%{}, fn(char, map) -> Map.update(map, char, 1, &(&1 + 1)) end)

    Enum.reduce(counts, 0, fn({_, v}, total) ->
      cond do
        rem(v, 2) === 1 && rem(total, 2) === 1 -> total + v - 1
        true -> total + v
      end
    end)
  end
end
