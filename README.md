
# On My Grind ☕

## Overview

"On My Grind" is a React-based app inspired by Wordle where users can test their barista skills! The app allows users to memorize coffee drink recipes and quiz themselves on random real (and possibly discontinued) Starbucks drinks. Users are challenged to correctly guess four specific components for a given drink: temperature, syrup flavor, milk type, and blendedness.

This project was created as the Unit 3 Lab for the WEB102 Intermediate Web Development course.

## Learning Goals

This project focuses on teaching intermediate React concepts, specifically:

*   Creating React forms from scratch and dynamically populating their answer choices.
*   Creating custom components within a parent component and passing props (and ways to edit state variables).
*   Creating and setting state variables (using useState) to handle controlled inputs and edit information on a page.
*   Importing local data files (drinks.json) into an app.
*   Using user input to change visual aspects of the app, such as conditionally rendering CSS classes based on correct or incorrect answers.

## Features

### Required Features

*   **Drink Display:** Only one drink is displayed at a time for the user to guess.
*   **Interactive Guessing:** Users can click one option for each of the four categories (Temperature, Syrup, Milk, Blended) to input their guess.
*   **Dynamic UI:** The selected option populates into an answer box above the choices. If an option is already selected, it is replaced by the newly selected option.
*   **Answer Checking:** Clicking the "Check Answer" button submits the guesses to be checked for correctness.
*   **Visual Feedback:** After checking the answer, the app visually updates to show which components were entered correctly or incorrectly (e.g., the answer box turns red if incorrect and purple/correct color if correct).
*   **New Drink:** Clicking the "New Drink" button randomly selects a new drink from the JSON data, shows it on the screen, and clears all previous input boxes.

### Stretch Features

*   **Text Input Validation:** Instead of just clicking radio buttons, users can type their responses into a text box for each category.
*   **Error Handling:** Typed inputs are validated, and the app alerts the user if their text doesn't match any of the potential ingredient choices provided in the original list.

## Tech Stack

*   **Frontend Framework:** React (JavaScript)
*   **Build Tool:** Vite
*   **Styling:** CSS (Flexbox)

## Getting Started

This project was bootstrapped with Vite. To set up and run the app locally, follow these steps:

1.  Clone the repository and navigate into the project directory.
2.  Install the necessary dependencies.
3.  Start the local development server.
