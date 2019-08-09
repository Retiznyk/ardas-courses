# Lecture #3

## About this repo

- [Original sign in form](https://github.com/Retiznyk/ardas-courses/tree/master/lecture3/001-original-signin-form)
- [Refactored sign in form with HOCs](https://github.com/Retiznyk/ardas-courses/tree/master/lecture3/002-hoc)
- [Using render props to add more flexibility for Rating component](https://github.com/Retiznyk/ardas-courses/tree/master/lecture3/003-render-prop)
- [Additional refactoring of sign in form with using context API](https://github.com/Retiznyk/ardas-courses/tree/master/lecture3/004-context)

## Homework

1. Create buttons: "Square", "Circle", "Triangle" which creates shape that related to him:

#### Square

- Each odd element can be dragged
- Each 3rd should be x2 bigger than others
- Each 4th should have dashed border but should not have the ability to be dragged
- Square color - blue

#### Circle

- can change background color (to random) on click
- each click should have 20% chance to destroy this element
- Initial circle color - green

#### Triangle

- Dropping of square on this element destroys him (square) immediately
- Clicking on this element can change his view to any image 100x100px
- Triangle color - red

2. Create themes switcher buttons (like: "Light" and "Dark"):

- Light theme - original schema (white background)
- Dark theme - makes body background to dark and all shapes colors to white
