export const formatArray = (arr) => {
  if (arr?.length === 0) return "";
  if (arr?.length === 1) return arr[0];
  const lastItem = arr?.pop();
  return arr?.join(",") + " and " + lastItem;
};
