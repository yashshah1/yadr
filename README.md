<img width=200 src="https://raw.githubusercontent.com/yashshah1/yard-ts/master/assets/logo.svg">

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

# yard-ts - Yet Another Repository of Datastructures - Ts

Targets to be a hlighly powerful, low dependency set of datastructures written in TypeScript<br />
(The name is such because finding a repo name that doesn't exist already is tougher than it looks)

# Table Of Contents

- [yard-ts - Yet Another Repository of Datastructures - Ts](#yard-ts---yet-another-repository-of-datastructures---ts)
- [Table Of Contents](#table-of-contents)
- [Install](#install)
- [Usage](#usage)
  - [CommonJS](#commonjs)
  - [ES](#es)
- [Status](#status)
- [Contributing](#contributing)
  - [Naming Convention](#naming-convention)
- [Testing](#testing)
- [License](#license)
  - [Contributors ✨](#contributors-%e2%9c%a8)

# Install

```sh
npm i yard-ts
```

# Usage

## CommonJS

```diff
- const ds = require('yard-ts');
+ const ds = require('yard-ts').default;
```

## ES

```js
import ds from 'yard-ts';
```

# Status

- Linked List
  - Singly Linked List - done
  - Doubly Linked List - done
- Stack
  - Array Stack - done
  - Linked List Stack - done
- Queue
  - Array Queue - done
  - Linked List Queue - done
- Binary Trees
  - Binary Search Tree - done
  - AVL Tree - done (tests pending)
- Graph - in progress
- Heap - in progress
- Priority Queue - in progress
- HashTable - in progress

# Contributing

Feel free to fork and raise a PR with any bugfix / contribution.

## Naming Convention

- Folders - All lowercased, hypen (`-`) seperated
- Code Files - `PascalCased.ts`
- Test Files - `PascalCased.test.ts` (Must reside in `__tests__`)

# Testing
```sh
npm test
```
This should run all the tests, to run a specific test run
```sh
npm test -- -t <Keyword identifier>
```

As of writing, the test suite covers:
- `98.27%` of statements
- `94.44%` of branches
- `98.25%` of functions
- `99.34%` of lines

# License

Code is distributed under MIT License. Full license [here](https://github.com/yashshah1/datastructures-ts/blob/master/LICENSE)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/naman-modi"><img src="https://avatars3.githubusercontent.com/u/38180263?v=4" width="100px;" alt=""/><br /><sub><b>Naman Modi</b></sub></a><br /><a href="https://github.com/yashshah1/yard-ts/commits?author=naman-modi" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!