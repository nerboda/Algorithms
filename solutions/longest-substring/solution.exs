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
  def length_of_longest_substring(string), do: string |> length_of_longest_substring(0, 0, 0, %{})

  defp length_of_longest_substring(string, start_index, end_index, longest, indexes) do
    if end_index >= String.length(string) do
      longest
    else
      currrent_char = String.at(string, end_index)
      previous_occurrence = Map.get(indexes, currrent_char, -1)
      updated_indexes = Map.put(indexes, currrent_char, end_index)

      cond do
        previous_occurrence >= start_index ->
          string |> length_of_longest_substring(previous_occurrence + 1, end_index, longest, updated_indexes)

        true ->
          longest = max(longest, end_index - start_index + 1)

          string |> length_of_longest_substring(start_index, end_index + 1, longest, updated_indexes)
      end
    end
  end
end

