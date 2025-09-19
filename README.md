# Quizathon! app

The Quizathon! app is designed to be a fun and easy-to-use quiz game with a colourful design, interactive features, real-time feedback, and replayability.

![Quizathon! app shown on a range of devices](/readme-docs/devices-showcase.png)

[View Quizathon! on Github Pages](https://arun-dhanjal.github.io/hackathon-quiz-app/)

## CONTENTS

* [Purpose and Value](#Purpose-and-Value)
  * [Application Purpose](#Application-Purpose)
  * [User Value](#User-Value)

* [Design](#Design)
  * [Colour Scheme](#Colour-Scheme)
  * [Typography](#Typography)
  * [Page Layout](#Page-Layout)
  * [Features](#Features)
  * [Accessibility](#Accessibility)

* [Technologies Used](#Technologies-Used)
  * [Languages Used](#Languages-Used)
  * [Frameworks, Libraries & Programs Used](#Frameworks-Libraries--Programs-Used)

* [Deployment](#Deployment)

* [Testing](#Testing)
  * [W3C Validator: HTML](#W3C-Validator-HTML)
  * [W3C Validator: CSS](#W3C-Validator-CSS)
  * [JSHint: JavaScript](#JSHint-JavaScript)
  * [Lighthouse: mobile](#Lighthouse-mobile)
  * [Lighthouse: desktop](#Lighthouse-desktop)

* [AI Usage](#AI-Usage)

* [Credits](#Credits)

- - -

## Purpose and Value

### Application Purpose
 
The Quizathon! app has been created as part of a hackathon in order to showcase each team member's grasp of front-end programming languages (HTML, CSS, JavaScript) as well as the capacity to work as a team and effectively use GitHub for collaboration.

### User Value

User stories with relevant acceptance criteria have been created to demonstrate the value that users would derive from using this app. Associated tasks have been assigned to each team member and have been managed throughout the project via a GitHub project board. Details on each user story, along with the acceptance criteria and assigned tasks can be found on the project board here:

[GitHub Project Board](https://github.com/users/arun-dhanjal/projects/5)

- - -

## Design

### Colour Scheme

![Quizathon! Colour Palette](/readme-docs/Quizathon!%20palette.png)

The app uses a palette of pastel primary colours in order to look inviting whilst not being too garish. A gradient background with coloured buttons on a white quiz area gives a splash of colour but keeps things from being too loud or causing eye strain. The colour palette was created using the [Coolors](https://coolors.co/) website.

### Typography

Keeping in line with the subtle but friendly theme, the Quicksand font has been selected to be used throughout the application. If the Quicksand font isn't available for any users, a 'sans-serif' default font will activate instead.

### Page Layout

Wireframes were created based on the initial design of the page layout for various screen sizes. The final deployed application has some minor changes/additions, for example the button layout on laptops is now horizontally lined up instead of in a grid layout,a progress bar has been added below the score buttons, and a replay button has been added to the modal. However, the overall design is still largely aligned with the initial wireframes. Wireframes shown below:

#### Mobile Layout
![Wireframe 1](/readme-docs/mobile-layout.png)
#### Mobile Layout (Modal)
![Wireframe 2](/readme-docs/mobile-modal.png)
#### Tablet Layout
![Wireframe 3](/readme-docs/tablet-layout.png)
#### Tablet Layout (Modal)
![Wireframe 4](/readme-docs/tablet-modal.png)
#### Laptop Layout
![Wireframe 5](/readme-docs/laptop-layout.png)
#### Laptop Layout (Modal)
![Wireframe 6](/readme-docs/laptop-modal.png)

### Features

* App title:

  * A large title for the app to inform users of the app they are using - this is placed above and outside of the main quiz container.

  ![App title](/readme-docs/title.png)

* Question section:

  * A question section comprising of two main parts: the actual question in larger text; and the four possible answers written in full.

  ![Questions section](/readme-docs/question.png)

* Answer buttons:

  * An arrangement of 4 buttons, with each corresponding to an answer from the question section above.

  * Each button is coloured differently for visual separation.

  * The arrangement of buttons changes on different device sizes: vertically stacked on mobile; grid layout on tablet; horizontally lined up on laptop and larger. These device sizes are based on the Bootstrap breakpoints.

  * A unique sound will play dependent on whether the correct or incorrect answer button has been submitted.

  ![Answer buttons](/readme-docs/buttons.png)

* Quiz progression:

  * Progression through the quiz is communicated in two ways: a question counter and a progress bar.

  * Question counter shows progression through the quiz numerically.

  * Progress bar shows progression through the quiz visually and numerically.

  ![Quiz progression](/readme-docs/progress.png)

* Score section:

  * A score counter features below the progression area.

  * The score counter updates as questions are answered, incrementing with each correct answer.

  ![Score section](/readme-docs/score.png)

* Feedback and replay:

  * On completion of the quiz, a modal will pop up in the middle of the screen.

  * This modal will contain a congratulatory message, with a title in larger text and feedback on the final score in smaller text.

  * A green replay button features under this message: this allows for the user to try the quiz again from Question 1 with the score reset to 0.

  ![Feedback and replay](/readme-docs/modal.png)

* Future implementations:

  * A larger question set could be implemented in the future to allow for extended gameplay.

  * Immediate feedback after answering each question, e.g. correct answers being highlighted in green and incorrect answers being highlighted in red.

  * A timer to restrict the duration of the quiz, adding an additional level of challenge.

  * More keyboard input options, e.g. assigned the keyboard inputs of A, B, C, and D to the on-screen buttons in order to submit an answer.

### Accessibility

Mindful development has been exercised throughout the project to ensure the app is as accessible and user-friendly as possible. This includes:

* Using semantic HTML.

* Ensuring that there is a sufficient colour contrast throughout the site.

* Ensured good visual separation of buttons by using different colours.

* Ensured clickable inputs are appropriately sized for ease of use.

* Including appropriate aria labelling.

* Allowing for some keyboard inputs in addition to mouse inputs (e.g. TAB and ENTER to select and submit an answer button).

- - -

## Technologies Used

### Languages Used

HTML, CSS, and JavaScript were used to create this app.

### Frameworks, Libraries & Programs Used

Git - For version control.

GitHub - To save and store the files for the app, as well as for collaborating with team members.

Bootstrap Version 5.3 - Code used mainly for the quiz container, buttons, progress bar, and modal. Additional CSS styling was also implemented in style.css.

Browser Dev Tools - To troubleshoot and test features, solve issues with responsiveness and styling.

Microsoft PowerPoint - To create the initial wireframes.

Microsoft Copilot - For code queries and resolution of coding issues.

OpenAI ChatGPT - For code queries and resolution of coding issues.

[Am I Responsive?](http://ami.responsivedesign.is/) - To show the app image on a range of devices.

- - -

## Deployment

Github Pages was used to deploy the live app. The instructions to achieve this are below:

1. Log in to Github.
2. Find the repository for this project: hackathon-quiz-app.
3. Click on the Settings link.
4. Click on the Pages link in the left hand side navigation bar.
5. In the Source section, choose main from the drop down select branch menu. Select Root from the drop down select folder menu.
6. Click Save. Your live Github Pages site is now deployed at the URL shown.

- - -

## Testing

Testing was ongoing throughout the entire development process. Browser developer tools were used while building to pinpoint and troubleshoot any issues as development progressed, as well as Microsoft Copilot/OpenAI ChatGPT to query specific coding logic queries.

More comprehensive testing was carried out on completion of the build using dedicated validation software, as shown below.

### W3C Validator: HTML

![HTML validation screenshot](/readme-docs/html-validation.png)

### W3C Validator: CSS

![CSS validation screenshot](/readme-docs/css-validation.png)

### JSHint: JavaScript

![JS validation screenshot](/readme-docs/jshint.png)

### WAVE: Web Accessibility Evaluation Tool

![WAVE validation](/readme-docs/wave.png)

### Lighthouse: Mobile

![Lighthouse mobile validation screenshot](/readme-docs/lighthouse-mobile.png)

### Lighthouse: Desktop

![Lighthouse desktop validation screenshot](/readme-docs/lighthouse-desktop.png)

- - -

## AI Usage
AI has been used by each contributor during the development of this app, Microsoft Copilot for the most part. A few key points on the use of AI:

* Used to generate user stories, acceptance criteria, and tasks for the GitHub project board.

* Used to generate the question and answer content implemented in the app.

* Used as a means of learning and querying snippets of code during app development.

Please note: although AI has been utilised during the development of this app, any and all AI outputs have been scrutinised and considered carefully before being implemented. The team of contributors appreciates that AI is a tool to be used and not relied on without complete understanding of the output.

## Credits
### Content

The audio clips for the buttons were sourced from the Pixabay: https://pixabay.com/

The favicons were sourced from: https://favicon.io/

### Contributors
This app is the result of collaboration between a team of contributors, including:

* Amelia James - https://github.com/AmeliaBeep
* Natalie Gokkaya - https://github.com/NatGok
* Arun Dhanjal - https://github.com/arun-dhanjal
* Valery Carpentier - https://github.com/vcarpentier
* Mark Laban - https://github.com/marklaban36


