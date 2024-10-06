export const formatArray = (arr) => {
  if (!arr || !Array.isArray(arr) || arr.length === 0) return ""; // Return empty string if the array is invalid or empty

  if (arr.length === 1) return arr[0]; // If only one item, return it directly

  if (arr.length === 2) return `${arr[0]} and ${arr[1]}`; // If two items, join them with 'and'

  // For three or more items, join the last item with 'and'
  return `${arr.slice(0, -1).join(", ")} and ${arr[arr.length - 1]}`;
};
