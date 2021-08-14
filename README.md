# Assignments: Frontend Development (Session 2 & 3)

This project bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To see it on LocalHost, run

### `npm install` and `npm start`

Navigation buttons are located at the top of the homepage for toggling between each of the apps below.

### Questions

- React functional components are passed as state values of'activeTab'. Is this good practice and does the functional component still count as a child of App if not the 'activeTab'?

## 1. Bill Splitter

To view, click on the 'Bill Splitter' tab.

The app calculates how much each person should pay when going dutch.
The result is displayed only when the 'Split' button is clicked.

## 2. Careers

To view, click on the 'Career' tab.

The app allows a user to create a new Job Posting by filling out a form.
The result is displayed in the Job Post listing when the form is submitted with valid data.
Data is not persistent.

### Questions

- Form data is extracted on form 'click' to create new Job Posting, instead of tracking individual state of fields ==> What are the pros/cons?

## 3. Pokemon

To view, click on the 'Pokemon' tab.

The app pulls data from the https://pokemon-json.herokuapp.com/api/pokedex API and displays information about the first 12 Pokemons. The description of each Pokemon is truncated for aesthetic reasons.
Toggle the names of all pokemons in 'English', 'Japanese', or 'Chinese' by clicking on any of them.
