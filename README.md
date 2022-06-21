# React Counter

A sandbox app by James Krill to experiment with a react number counter animation.

## Getting Started

Clone this repo and run:

```
yarn install
```

then:

```
yarn start
```

---

## Example Application Getting Started Documentation

<p><img src="https://i.imgur.com/zxO2ib2.png" alt="twin, react, styled-components" width="500"></p>

This example uses [Parcel 2](https://parceljs.org/) to build a [React](https://reactjs.org/) App styled with [Twin](https://github.com/ben-rogerson/twin.macro) + [styled-components](https://styled-components.com/).

**Download this example using [degit](https://github.com/Rich-Harris/degit)**

```shell
npx degit https://github.com/ben-rogerson/twin.examples/react-styled-components folder-name
```

From within the new folder, install run `npm install`/`yarn`, then `npm start`/`yarn start` to start the dev server.

[](#table-of-contents)

## Table of contents

- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Add the global styles](#add-the-global-styles)
  - [Add the twin config](#add-the-twin-config)
  - [Add the babel config](#add-the-babel-config)
- [Customization](#customization)
- [Next steps](#next-steps)

[](#getting-started)

## Getting started

### Installation

```shell
npm install react react-dom styled-components
npm install -D @babel/core @babel/plugin-transform-react-jsx twin.macro tailwindcss babel-plugin-styled-components
```

<details>
  <summary>Install with Yarn</summary>

```shell
yarn add react react-dom styled-components
yarn add @babel/core @babel/plugin-transform-react-jsx twin.macro tailwindcss babel-plugin-styled-components -D
```

</details>

### Add the global styles

Twin uses the same [preflight base styles](https://unpkg.com/tailwindcss/dist/base.css) as Tailwind to smooth over cross-browser inconsistencies.

The `GlobalStyles` import adds these base styles along with some @keyframes for the animation classes and some global css that makes the [ring classes](https://tailwindcss.com/docs/ring-width) and box-shadows work.

You can import `GlobalStyles` within a new file placed in `src/styles/GlobalStyles.js`:

```js
// src/styles/GlobalStyles.js
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
```

Then import the GlobalStyles file in `src/index.js`:

```js
// src/index.js
import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyles from './styles/GlobalStyles'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
```

### Add the twin config

Twin’s config can be added in a couple of different files.

a) Either in `babel-plugin-macros.config.js`:

```js
// babel-plugin-macros.config.js
module.exports = {
  twin: {
    preset: 'styled-components',
  },
}
```

b) Or in `package.json`:

```js
// package.json
"babelMacros": {
  "twin": {
    "preset": "styled-components"
  }
},
```

### Add the babel config

```js
// .babelrc
// In .babelrc
{
  "plugins": [
    "babel-plugin-macros",
    "babel-plugin-styled-components",
    "@babel/plugin-transform-react-jsx",
  ]
}
```

[](#customization)

## Customization

- [View the config options →](https://github.com/ben-rogerson/twin.macro/blob/master/docs/options.md)
- [Customizing the tailwind config →](https://github.com/ben-rogerson/twin.macro/blob/master/docs/customizing-config.md)

[](#next-steps)

## Next steps

Learn how to work with twin

- [The prop styling guide](https://github.com/ben-rogerson/twin.macro/blob/master/docs/prop-styling-guide.md) - A must-read guide to level up on prop styling
- [The styled component guide](https://github.com/ben-rogerson/twin.macro/blob/master/docs/styled-component-guide.md) - A must-read guide on getting productive with styled-components

Learn more about styled-components

- [The css prop](https://styled-components.com/docs/api#css-prop)
- [The css import](https://styled-components.com/docs/api#css)
- [The styled import](https://styled-components.com/docs/api#styled)
