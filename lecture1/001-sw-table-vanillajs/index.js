import { movies } from "./data.json";

function renderTable(tableData) {
  const container = document.createElement("table");
  container.setAttribute("class", "table table-bordered table-dark");
  container.appendChild(getFragmentWithTableData(tableData));

  return container;

  function getFragmentWithTableData(data) {
    // should remember about optimization
    const fragment = document.createDocumentFragment();
    data.forEach(item => {
      const row = createRow(item);
      fragment.appendChild(row);
    });
    return fragment;
  }

  function createRow(rowData) {
    const row = document.createElement("tr");
    row.innerText = rowData.title;
    return row;
  }
}

// should remember about DOM availability
document.addEventListener("DOMContentLoaded", onDOMReady);

function onDOMReady() {
  document.removeEventListener("DOMContentLoaded", onDOMReady);
  const app = document.getElementById("app");
  // don't forget to replace previous data
  app.innerHTML = "";
  app.appendChild(renderTable(movies));
}
