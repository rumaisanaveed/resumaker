export const formatDate = (date, formatString = "YYYY-MM-DD") => {
  return date ? date.format(formatString) : null;
};
