import test from "ava";
import { Stack } from "./stack.js";

test("stack: empty", (t) => {
  const stack = new Stack();
  t.is(stack.size(), 0);
  t.true(stack.isEmpty())
});

test("Stack: push elements", (t) => {
  const stack = new Stack();

  stack.push(1)
  t.is(stack.size(), 1)

  stack.push(2)
  t.is(stack.size(), 2)

  stack.push(3)
  t.is(stack.size(), 3)

  t.false(stack.isEmpty())
});

test('Stack: pop elements', (t) => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);

  t.is(stack.pop(), 3)
  t.is(stack.pop(), 2)
  t.is(stack.pop(), 1)
  t.is(stack.pop(), undefined)
})

test('Stack: allows to peek at the top element in he stack without popping it', t => {
  const stack = new Stack();
  t.is(stack.peek(), undefined)

  stack.push(1);
  t.is(stack.peek(), 1)

  stack.push(2);
  t.is(stack.peek(), 2)

  stack.pop()
  t.is(stack.peek(), 1)
})

test('Stack: returns the correct size', t => {
  const stack = new Stack();
  t.is(stack.size(), 0);

  stack.push(1);
  t.is(stack.size(), 1);

  stack.push(2);
  t.is(stack.size(), 2);

  stack.clear();
  t.true(stack.isEmpty())

  stack.push(1);
  stack.push(2);
  stack.push(3);

  stack.pop();
  t.is(stack.size(), 2);

  stack.pop();
  t.is(stack.size(), 1);

  stack.pop();
  t.is(stack.size(), 0);
})

test('Stack: returns if it is empty', t => {
  const stack = new Stack();
  t.true(stack.isEmpty())

  stack.push(1);
  t.false(stack.isEmpty())
  stack.push(2);
  t.false(stack.isEmpty())
  stack.push(3);
  t.false(stack.isEmpty())

  stack.clear();
  t.true(stack.isEmpty())

  stack.push(1);
  stack.push(2);
  stack.push(3);

  stack.pop();
  t.false(stack.isEmpty())
  stack.pop();
  t.false(stack.isEmpty())
  stack.pop();
  t.true(stack.isEmpty())
})

test('Stack: clears the stack', t => {
  const stack = new Stack();
  stack.clear();
  t.true(stack.isEmpty())

  stack.push(1);
  stack.push(2);

  stack.clear();
  t.true(stack.isEmpty())
})

test('Stack: returns toString primitive types', t => {
  const stack = new Stack();
  t.is(stack.toString(), '')

  stack.push(1);
  t.is(stack.toString(), '1')
  stack.push(2);
  t.is(stack.toString(), '1,2')

  stack.clear();
  t.is(stack.toString(), '')

  stack.push('el1');
  t.is(stack.toString(), 'el1')

  stack.push('el2');
  t.is(stack.toString(), 'el1,el2')
})

test('Stack: returns toString objects', t => {
  const stack = new Stack();
  class MyObj {
    constructor(el1, el2) {
      this.el1 = el1;
      this.el2 = el2;
    }

    toString() {
      return `${this.el1.toString()}|${this.el2.toString()}`;
    }
  }
  t.is(stack.toString(), '')

  stack.push(new MyObj(1, 2));
  t.is(stack.toString(), '1|2')

  stack.push(new MyObj(3, 4));
  t.is(stack.toString(), '1|2,3|4')
})