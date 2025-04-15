Installation Setup

1) npm create vite@latest

2) React

3) JavaScript


Dependencies Installed

- npm install @reduxjs/toolkit

- npm install react-redux


Creating TODO app

Steps we followed

1) Creating the store

2) In index.js/main.jsx - Warapping <App /> component in <Provider />, So it should be available in all app component or its child component

3) Creating the slice for the features For ex in our case we created slices for 
  - increment
  - decrement
  - Increase by amount

4) importing "reducer" which we have in "counterSlice" file to "store.js" file

5) In App.jsx file we are using importing all the reducers to use it