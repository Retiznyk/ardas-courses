import { movies } from "../data.json";
import createTable from "./table";

function init(container) {
  const table = createTable(movies);
  container.appendChild(table);
}

export default init;
