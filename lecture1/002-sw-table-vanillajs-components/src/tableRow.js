import tableCell from "./tableCell";

export default (data = {}) => {
  const row = document.createElement("tr");
  [data.episode_number, data.title, data.description].forEach(item => {
    const cell = tableCell(item);
    row.appendChild(cell);
  });
  return row;
};
