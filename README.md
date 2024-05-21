<p align="center">
  <h1 align="center">unocss-preset-marumaru</h1>
</p>

<div align="center">
  <a href="https://github.com/maikotan/unocss-preset-marumaru">
    <img alt="Static Badge" src="https://img.shields.io/badge/GitHub-violet?style=for-the-badge&logo=github">
  </a>
  <a href="https://www.npmjs.com/package/unocss-preset-marumaru">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/unocss-preset-marumaru?style=for-the-badge&logo=npm">
  </a>
  <a href="https://www.npmjs.com/package/unocss-preset-marumaru">
    <img alt="NPM Downloads" src="https://img.shields.io/npm/dm/unocss-preset-marumaru?style=for-the-badge&logo=npm">
  </a>
  <a href="https://maikotan.github.io/unocss-preset-marumaru/">
    <img alt="Static Badge" src="https://img.shields.io/badge/Documentation-blue?style=for-the-badge&logo=readme&logoColor=f5f5f5">
  </a>
</div>

A preset for UniApp, mainly for rounded shapes.

## Work in progress

This preset is still in development, and some styles may not be applied correctly.

## Installation

```bash
yarn add -D unocss-preset-marumaru
```

```bash
npm i --save-dev unocss-preset-marumaru
```

## Usage

Import the preset in your `uno.config.*` file.

You can see the [UnoCSS documentation](https://unocss.dev/guide/presets) for more information.

```js
// unocss.config.ts
import { defineConfig } from 'unocss'
import { presetMarumaru } from 'unocss-preset-marumaru'

export default defineConfig({
  presets: [
    presetMarumaru(),
  ],
})
```

## Classes

<div class="hidden">

See our [documentation](https://maikotan.github.io/unocss-preset-marumaru/) for all classes and demos.

</div>
