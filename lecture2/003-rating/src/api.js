export const getRating = () =>
  fetch("localhost:3002").then(response => response.json());
