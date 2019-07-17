import tableRow from "./tableRow";

export default (data = []) => {
  const container = document.createElement("tbody");
  data.forEach(item => {
    container.appendChild(tableRow(item));
  });

  return container;
};
