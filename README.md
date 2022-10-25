# 🐝 BEES Front-end Challenge

BEES front-end challenge made using React.

> Vamos juntos nessa transformação!

## 🖵 Preview

### Application

[![Application Preview](.github/app-preview.gif "Application Preview")](.github/app-preview.gif "Application Preview")

### API Error

[![API Error](.github/api-error.gif "API Error")](.github/api-error.gif "API Error")

### Cypress

[![Cypress Preview](.github/cypress-preview.gif "Cypress Preview")](.github/cypress-preview.gif "Cypress Preview")

## 🎨 Design

The user interface of this project was based [on this Figma](https://www.figma.com/file/uFEUiFI47Ap1wSfWaEHSnI/BEES-front-end-challenge?node-id=0%3A1 "on this Figma").

### 💻 Technologies

This project uses these technologies:

- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Cypress](https://www.cypress.io/)
- [Vercel](https://vercel.com/)

### 🔗 Endpoint [API]

- [Open Brewery DB](https://www.openbrewerydb.org/documentation)

## ⌨️ Commands

### Install Dependencies

```npm
npm install
```

### Run Project

```npm
npm start
```

- APP: [http://localhost:3000/](http://localhost:3000/ "localhost")

### Run Unit Tests

```npm
npm run test
```

with percentage covered

```npm
npm run test -- --coverage --watchAll=false
```

### Run Cypress Tests

```npm
npx cypress open
```

## 👨‍💻 Solution

### 📁 Folder Structure

```
├── _src
│   ├── _components
│   │   ├── _Example
│   |       ├── Example.spec.tsx
│   |       ├── Example.tsx
│   |       ├── ExampleStyled.ts
│   |       ├── index.ts
│   └── models
...
```

### General Decisions:

- I used semantic commits since the beginning of the project, something I've been doing for a while;
- I chose to use sass together with styled components (just personal preference);
- I chose to use the TypeScript as well as type all the props and states of my components;
- I used the svg icons provided in the Figma template;
- I decided to use **zustand** to save the full name due to the ease of the lib;
- I added a field called _tag_ to the company object, as well as an icon when adding a new tag;
- I added a loader with _css animation_ and an error message if the API fails;

### Critique

#### Improvements:

Although they are not mentioned in the challenge, I believe these would be good improvements:

- Persist the modified data in some way, perhaps using localStorage;
- Don't let unnamed users see the companies page;
- Make the _delete_ company and _add_ tag actually real using an api;

#### Notes:

- I hope you like the result 😅.

> Developed by <a href="https://www.linkedin.com/in/eduardo-dos-santos-dusik-095100120/" target="_blank">Eduardo Dusik</a>
