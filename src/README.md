# Personal Porfolio Demo

## Prerequisites
Must have:
-  [node.js](https://nodejs.org/en)
-  Visual Studio Code, or any IDE

## Set Up Instructions
1. To clone the repository, open a terminal window and run `git clone https://github.com/uf-cskickstart/personal-portfolio.git`.
2. Navigate into the project by running `cd personal-portfolio`.
3. Run `npm install` to install the project's package dependencies.
4. Run `npm start` to start up the local environment. Navigate to `http://localhost:3000/WiCSE-Personal-Project` to visualize the website.

## Folder Structure
<pre>
├── README.md
├── node_modules <b>[Contains package dependencies]</b>
├── package-lock.json
├── package.json <b>[Lists package dependencies, among other things]</b>
├── public <b>[Stores static assets]</b>
└── src <b>[Core code of the application]</b>
    ├── App.css
    ├── App.js <b>[Entry point]</b>
    ├── App.test.js
    ├── components
    │   ├── Footer
    │   ├── Navbar
    │   └── ProjectItem
    ├── data [Project data]
    ├── images
    ├── index.css
    ├── index.js <b>[Main HTML file that gets served when your React app is loaded]</b>
    ├── logo.svg
    ├── pages
    │   ├── DisplayProject
    │   ├── Experiences
    │   ├── Home
    │   └── Projects
    ├── reportWebVitals.js
    └── setupTests.js
</pre>

## Pages and Components Overview
Understanding the relationship between pages and components and how data is passed between them:
![Personal Portfolio Structure (1)](https://github.com/user-attachments/assets/b8b4f829-07e6-434e-bac7-27a8883c9b02)
