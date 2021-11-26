# JS Invaders Camp Project

A blog app made with React + Node.js during [Intellias'](https://www.intellias.ua) JS Invaders Camp.

🚧 **Work In Progress** 🚧

Live: [kubrysh-react-blog-app.herokuapp.com](https://kubrysh-react-blog-app.herokuapp.com)

- 🔌 [Usage](#usage)
- 🌍 [Depolyment](#deployment)
- 📚 [Homework](#homework)
  - [#4 (Nov 24, 2021 – D/L: Nov 26, 2021)](#-homework-4-nov-24-2021--dl-nov-26-2021)
  - [#3 (Nov 15, 2021 – D/L: End of The Course)](#-homework-3-nov-15-2021--dl-end-of-the-course)
  - [#2 (Nov 12, 2021 – D/L: Nov 20, 2021)](#-homework-2-nov-12-2021--dl-nov-20-2021)
  - [#1 (Nov 8, 2021 – D/L: Nov 10, 2021)](#-homework-1-nov-8-2021--dl-nov-10-2021)

## Usage

1. To launch the Development Server of **React App**:

`cd react-blog-app`

`npm start`

2. To launch the **Node App**:

`cd node-api-app`

`npm start`

## Deployment

**React App** is deployed on [Heroku](https://kubrysh-react-blog-app.herokuapp.com) using [create-react-app-buildpack](https://github.com/mars/create-react-app-buildpack) and served via [Nginx](https://nginx.org/en/).

**Node App** is also deployed on [Heroku](https://kubrysh-node-api-app.herokuapp.com).

## Homework

### ✅ Homework #4 (Nov 24, 2021 – D/L: Nov 26, 2021)

#### Task:

> * Setup basic back end application
> * Serve SPA by Express JS

#### Comments:

* Setted up & configured Node + Express server for handling API & Business Logic
* Configured routing & error handling on Express
* Created 2 API Endpoints (GET & POST) for getting existing articles and adding new ones
* Implemented articles fetching from API
* Implemented adding new articles via sending POST requests using form data to API
* Implementeed article data storage in a file
* Deployed React App served by Nginx on Heroku
* Deployed Node App on Heroku
* TBD: rework data fetching with axios

---

### 🔘 Homework #3 (Nov 15, 2021 – D/L: End of The Course)

#### Task:

> * Use MaterialUI components
> * Add styles
> * Focus on: moving from the default browser components and styles to the MaterialUI, make your project clean and good looking

#### Comments:

* TBD

---

### ✅ Homework #2 (Nov 12, 2021 – D/L: Nov 20, 2021)

#### Task:

> * Create a basic layout for a personal blog
>
> * Create form and validation for publishing an article

#### Comments:

* Created a basic blog layout as specified by the image
* Created a form for publishing a new article (**!!! To access the form, click on the `✍️ New Article` in the navigation section**)
* At first, I implemented basic validation with the raw [yup library](https://www.npmjs.com/package/yup), but error handling was not good enough out of the box.
* So, I switched to `Formik` library (which also uses `yup` for validation, but allows to get error messages for each field) and reworked the whole form component.
* No component division and routing were implemented yet (since these are the tasks of the following homework assignments)

---

### ✅ Homework #1 (Nov 8, 2021 – D/L: Nov 10, 2021)

#### Task:

> * Create a basic project
>
> * Create a repository on GitHub

#### Comments:

* Created a react app via `create-react-app` with a typescript template


#### Additional Tasks:

***Task #1***:
> Explain the following regexp: `/\.(t|j)sx?$/`.

My solution:

The given regexp is used to test if a file path string ends with: `.tsx`, `.ts`, `.jsx`, `.js`.

1. `\.` – first character is a `.` (escaped dot)
2. `(t|j)` – the next character is `t` or `j` (using alternation operator)
3. `s` – following character is literal `s`
4. `x?` – `?` character matches the preceding item `x` 0 or 1 times
5. `$` – specifies that the tested string should end with a previous character (i.e. `x` or `s`)
