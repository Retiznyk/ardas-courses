# Lecture #5

## About this repo

This code represents basic saga effects and methods to use them

## Homework

- Implement a drop-down menu that will contain a list of users (you can use https://jsonplaceholder.typicode.com as a backend)
- After selecting user, an application should show all albums for this user
- After clicking on the album, an application should load all images that are related to it
- Each image should have likes indicator (likes endpoint is not implemented by "jsonplaceholder" team, so this data need to be saved in local storage for example)
- Likes indicator should be clickable, make POST request to `https://jsonplaceholder.typicode.com/photos/like` (this request will be failed, but we should handle this case as a success action and increase likes count)
- Use redux and redux-saga to implement all this logic
