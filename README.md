# π BEES Front-end Challenge

BEES front-end challenge made using React.

> Vamos juntos nessa transformaΓ§Γ£o!

## π΅ Preview

### Application

[![Application Preview](.github/app-preview.gif "Application Preview")](.github/app-preview.gif "Application Preview")

### API Error

[![API Error](.github/api-error.gif "API Error")](.github/api-error.gif "API Error")

### Cypress

[![Cypress Preview](.github/cypress-preview.gif "Cypress Preview")](.github/cypress-preview.gif "Cypress Preview")

## π¨ Design

The user interface of this project was based [on this Figma](https://www.figma.com/file/uFEUiFI47Ap1wSfWaEHSnI/BEES-front-end-challenge?node-id=0%3A1 "on this Figma").

### π» Technologies

This project uses these technologies:

- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [Zustand](https://github.com/pmndrs/zustand)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Cypress](https://www.cypress.io/)
- [Vercel](https://vercel.com/)

### π Endpoint [API]

- [Open Brewery DB](https://www.openbrewerydb.org/documentation)

## β¨οΈ Commands

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

## π¨βπ» Solution

### π Folder Structure

```
βββ _src
β   βββ _components
β   β   βββ _Example
β   |       βββ Example.spec.tsx
β   |       βββ Example.tsx
β   |       βββ ExampleStyled.ts
β   |       βββ index.ts
β   βββ models
...
```

### General Decisions:

- I used semantic commits since the beginning of the project, something I've been doing for a while;
- I chose to use sass together with styled components (just personal preference);
- I chose to use the TypeScript as well as type all the props and states of my components;
- I used the svg icons provided in the Figma template;
- I decided to use **zustand** to save the full name due to the ease of the lib;
- Also, I added a _minimum of 7 and limit of 32 characters_ in the full name field;
- I added a field called _tag_ to the company object, as well as an icon when adding a new tag;
- I added a minimum limit of _14_ characters in new tag;
- I added a loader with _css animation_ and an error message if the API fails;

### Critique

#### Improvements:

- Dynamic Loading of data showing more as you reach the bottom of the page;
- Implement an SVG image component to all icons;

Although they are not mentioned in the challenge, I believe these would be good improvements:

- Persist the modified data in some way, perhaps using localStorage;
- Don't let unnamed users see the companies page;
- Error message if the new tags are outside the stipulated limit;
- Make the _delete_ company and _add_ tag actually real using an API;

#### Notes:

- I hope you like the result π.

> Developed by <a href="https://www.linkedin.com/in/eduardo-dos-santos-dusik-095100120/" target="_blank">Eduardo Dusik</a>
