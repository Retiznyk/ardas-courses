import tableHeader from "./tableHeader";
import tableContent from "./tableContent";

export default data => {
  const table = document.createElement("table");

  table.setAttribute("class", "table table-bordered table-dark");

  table.appendChild(tableHeader(["Episode", "Title", "Description"]));
  table.appendChild(tableContent(data));

  return table;
};
