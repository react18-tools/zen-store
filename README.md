> Archiving this repo as npm package with similar name already exists. Please follow [React18GlobalStore](https://github.com/react18-tools/r18gs) for the latest updates.

- https://github.com/react18-tools/r18gs

# zen-store

[![test](https://github.com/mayank1513/zen-store/actions/workflows/test.yml/badge.svg)](https://github.com/mayank1513/zen-store/actions/workflows/test.yml) [![Maintainability](https://api.codeclimate.com/v1/badges/b312003ee4446361e265/maintainability)](https://codeclimate.com/github/react18-tools/zen-store/maintainability) [![codecov](https://codecov.io/gh/mayank1513/zen-store/graph/badge.svg)](https://codecov.io/gh/mayank1513/zen-store) [![Version](https://img.shields.io/npm/v/zen-store.svg?colorB=green)](https://www.npmjs.com/package/zen-store) [![Downloads](https://img.jsdelivr.com/img.shields.io/npm/dt/zen-store.svg)](https://www.npmjs.com/package/zen-store) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/zen-store) [![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/from-referrer/)

## Motivation

I have built wonderful libraries utilizing React18 features using Zustand. They worked awesome. However, when I try importing from specific folder for better tree-shaking, the libraries fail. This is because, for each import a separate zustand store is created. This actually increases the package size also.

Thus, I decided to create a bare minimum, ultra-light store that creates shared state even while importing components from separate files for better treeshaking.

> Will be using this library soon to fix issues with `nextjs-themes`.

## Features

✅ Full TypeScript Support

✅ Unleash the full power of React18 Server components

✅ Works with all build systems/tools/frameworks for React18

✅ Doccumented with [Typedoc](https://react18-tools.github.io/turborepo-template) ([Docs](https://react18-tools.github.io/zen-store))

✅ Next.js, Vite and Remix examples

## Install

```bash
$ pnpm add zen-store
```

or

```bash
$ npm install zen-store
```

or

```bash
$ yarn add zen-store
```



### Build

To build all apps and packages, run the following command:

```
cd zen-store
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd zen-store
pnpm dev
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

### 🤩 Don't forger to start [this repo](https://github.com/mayank1513/zen-store)!

Want hands-on course for getting started with Turborepo? Check out [React and Next.js with TypeScript](https://mayank-chaudhari.vercel.app/courses/react-and-next-js-with-typescript) and [The Game of Chess with Next.js, React and TypeScrypt](https://www.udemy.com/course/game-of-chess-with-nextjs-react-and-typescrypt/?referralCode=851A28F10B254A8523FE)

![RepoBeats](https://repobeats.axiom.co/api/embed/bb604a42998b687710c78b6d1ef84f29b646d45c.svg "Repobeats analytics image")

## License

Licensed as MIT open source.

<hr />

<p align="center" style="text-align:center">with 💖 by <a href="https://mayank-chaudhari.vercel.app" target="_blank">Mayank Kumar Chaudhari</a></p>
