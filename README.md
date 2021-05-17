# Interative Data Sorting Animation

[![Testing](https://github.com/kenng/data-sorting-animation/actions/workflows/tests.yml/badge.svg)](https://github.com/kenng/data-sorting-animation/actions)

This repository is created to make the learning of data sorting algorithm fun and interactive. Currently, the presentation only consists of a few more commonly known data sorting algorithms but can easily extend it for others. It is built with Vue.js and quasar framework for the UI.

## Demo

Play with the [Demo Page](https://kenng.github.io/data-sorting-animation/).

![data sorting algorithm gif](assets/data-sorting-algorithm-animation.gif)

## Main Features

-   Set new data array
-   Scroll on graph to go to next step
-   Animate single or graphs (vertically, horizontally or all)
-   Togglable controller, steps counting value, and data value

## Planning

-   to show the pseudocode algorithm
-   to be able to enlarge a single sorting algorithm

---

## Setting Up

#### Install the dependencies

```bash
yarn
```

#### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

#### Lint the files

```bash
yarn run lint
```

#### Run test

```bash
yarn test:unit:ci
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
