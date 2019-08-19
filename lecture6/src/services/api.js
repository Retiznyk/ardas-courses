export const getUsers = () =>
  fetch("https://jsonplaceholder.typicode.com/users").then(response =>
    response.json()
  );

export const getPostsByUser = userId =>
  fetch(`https://jsonplaceholder.typicode.com/posts?userId${userId}`).then(
    response => response.json()
  );
