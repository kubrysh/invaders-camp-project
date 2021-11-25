# JS Invaders Camp Project

A blog app made with React + Node.js during [Intellias'](https://www.intellias.ua) JS Invaders Camp.

🚧 **Work In Progress** 🚧

Live: [kubrysh-react-blog-app.herokuapp.com](https://kubrysh-react-blog-app.herokuapp.com)

- 🔌 [Usage](#usage)
- 🌍 [Depolyment](#deployment)
- 📚 [Homework](#homework)
  - [#2 (Nov 12, 2021 – D/L: Nov 20, 2021)](#-homework-1-nov-8-2021--dl-nov-10-2021)
  - [#1 (Nov 8, 2021 – D/L: Nov 10, 2021)](#-homework-1-nov-8-2021--dl-nov-10-2021)

## Usage

To launch the Development Server of **React App**:

`cd react-blog-app`

`npm start`

## Deployment

**React App** is deployed on Heroku using [create-react-app-buildpack](https://github.com/mars/create-react-app-buildpack) and served via [Nginx](https://nginx.org/en/).

## Homework

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
