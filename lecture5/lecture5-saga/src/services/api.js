export const getUser = userId =>
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(response =>
    response.json()
  );
