export default (titles = []) => {
  const header = document.createElement("thead");
  const tr = document.createElement("tr");

  titles.forEach(title => {
    const column = document.createElement("td");
    column.setAttribute("scope", "col");
    column.innerText = title;
    tr.appendChild(column);
  });

  header.appendChild(tr);
  return header;
};
