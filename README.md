<img width=200 src="https://raw.githubusercontent.com/yashshah1/yard-ts/master/assets/logo.svg">

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
