import { argv } from "./index.js"
import { test } from "fvb"

test("no arguments given", t => {
  t.equal(argv("node server.js"), {})
  t.plan(1)
})

test("only arguments given", t => {
  t.equal(argv("--arg1 hello --arg2 world"), { arg1: "hello", arg2: "world" })
  t.plan(1)
})

test("weird argument spacing", t => {
  t.equal(argv("--arg1 hello x--arg2 world"), { arg1: "hello x", arg2: "world" })
  t.plan(1)
})

test("double-dash in arguments", t => {
  t.equal(argv("--arg--1 hello--world"), { "arg--1": "hello", world: true })
  t.plan(1)
})

test("beep boop", t => {
  t.equal(argv("node server.js -a beep -b boop"), { a: "beep", b: "boop" })
  t.plan(1)
})

test("same arg repeated with different options", t => {
  t.equal(argv("node server.js -x beep -x boop"), { x: "boop" })
  t.plan(1)
})

test("commands that occur before opts start are thrown out", t => {
  t.equal(
    argv("node server.js bye bye bye -x beep -y boop"),
    { x: "beep", y: "boop" }
  )
  t.plan(1)
})

test("non options are absorbed into the previous option's value", t => {
  t.equal(
    argv("node server.js --look no quotes yay --beep boop"),
    { look: "no quotes yay", beep: "boop" }
  )
  t.plan(1)
})

test("same arg repeated with same options", t => {
  t.equal(argv("node server.js -x beep -x beep"), { x: "beep" })
  t.plan(1)
})

test("beep boop", t => {
  t.equal(argv("node server.js -a beep -b boop"), { a: "beep", b: "boop" })
  t.plan(1)
})

test("more beep boop", t => {
  t.equal(
    argv("node server.js -x 3 -y 4 -n5 -abc --beep=boop --no-ding foo bar baz"),
    {
      x: "3",
      y: "4",
      n5: true,
      abc: true,
      beep: "boop",
      "no-ding": "foo bar baz",
    }
  )
  t.plan(1)
})

test("several arguments given", t => {
  t.equal(
    argv("node server.js --host 127.0.0.1 --port 3000 -x -y -vvvv --r-x -v 420 -z --debug-enabled=yes"),
    {
      host: "127.0.0.1",
      port: "3000",
      x: true,
      y: true,
      vvvv: true,
      "r-x": true,
      v: "420",
      z: true,
      "debug-enabled": "yes",
    }
  )
  t.plan(1)
})
