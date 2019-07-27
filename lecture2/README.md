# Lecture #2

## About this repo

- [What we can return from components?](https://github.com/Retiznyk/ardas-courses/tree/master/lecture2/001-component-types)
- [Why do we need to pass key for arrays? Issues example](https://github.com/Retiznyk/ardas-courses/tree/master/lecture2/002-array-key-issues)
- [Rating component as an example of lifecycle hooks with unit tests](https://github.com/Retiznyk/ardas-courses/tree/master/lecture2/003-rating)

## Homework

- Create `Profile` component, that contains input for "**userId**" & "**Submit**" button
- When input is fulfilled and "**Submit**" button is pressed, make request to `https://jsonplaceholder.typicode.com/users/:userId` endpoint, where userId - entered data from input
- If input filed is empty show alert with message - _"You should enter userId to continue"_
- If request returns nothing - show empty screen with message _"User not found"_
- If request rejected - show message _"Something went wrong. Please try again"_
- If request returns user data - show all this data as a table.

  `For example:`

| Property |        Value         |
| -------- | :------------------: |
| Name     |       John Doe       |
| Email    | john.doe@example.com |
| ...      |         ...          |
| Phone    |     +1111111111      |

- Add unit tests
