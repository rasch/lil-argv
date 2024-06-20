# lil-argv

> a Lil Argv parser for ECMAScript CLI applications

This module *sucks* for command line argument parsing! **Don't use it** for
complex CLI applications. It is perfect for applications with just a few simple
options and for personal applications (where you don't have to (re)teach users
how to pass arguments since this module *sucks* (see the examples and tests for
details)). Woah! I just nested parenthesis in English like it's Lisp or
something!

```js
// example.js
import { argv } from "lil-argv"
console.log(argv())
```

```sh
node example.js -a beep -b boop
{
  a: "beep",
  b: "boop",
}
```

```sh
node example.js -x 3 -y 4 -n5 -abc --beep=boop --no-ding foo bar baz
{
  x: "3",
  y: "4",
  n5: true,
  abc: true,
  beep: "boop",
  "no-ding": "foo bar baz",
}
```

## install

```sh
pnpm add lil-argv
```

<details><summary>npm</summary><p>

```sh
npm install lil-argv
```

</p></details>
<details><summary>yarn</summary><p>

```sh
yarn add lil-argv
```

</p></details>
