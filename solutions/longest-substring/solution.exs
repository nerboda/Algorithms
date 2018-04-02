# recursive solution:
#   - length_of_longest_substring/3 : string, i, j, l, map
#     - i, j, l all default to 0
#   - base case: j is >= string length
#     - return l
#   - check to see if the map has a duplicate of the current char
#   - if it has duplicate
#     - call itself with the following args changed:
#       - i = index of previous occurrence + 1
#       - map = current map with current char added or updated
#   - else call itself with:
#       - j = j + 1
#       - map = current map with current char added or updated

defmodule MyString do
  def length_of_longest_substring(string, i \\ 0, j \\ 0, l \\ 0, map \\ %{}) do
    if j >= String.length(string) do
      l
    else
      currrent_char = String.at(string, j)
      last_index = Map.get(map, currrent_char, -1)
      updated_map = Map.put(map, currrent_char, j)

      cond do
        last_index >= i ->
          length_of_longest_substring(string, last_index + 1, j, l, updated_map)
        true ->
          length_of_longest_substring(string, i, j + 1, max(l, j - i + 1), updated_map)
      end
    end
  end
end
