const styleLists = (htmlString) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;

  const unorderedLists = tempDiv.querySelectorAll("ul");
  const orderedLists = tempDiv.querySelectorAll("ol");

  unorderedLists.forEach((ul) => {
    ul.style.listStyleType = "disc";
  });

  orderedLists.forEach((ol) => {
    ol.style.listStyleType = "decimal";
  });

  return tempDiv.innerHTML;
};

export default styleLists;
