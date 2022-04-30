import test from "ava";
import {Deque} from "./deque.js";
import {MyObj} from "../../util.js";

test('Deque: empty', it => {
    const deque = new Deque()
    it.is(deque.size(), 0)
    it.true(deque.isEmpty())
})

test('Deque: add elements in the back', it => {
    const deque = new Deque()
    deque.addBack(1)
    it.is(deque.size(), 1)

    deque.addBack(2)
    it.is(deque.size(), 2)

    deque.addBack(3)
    it.is(deque.size(), 3)
})

test('Deque: add elements in the front', it => {
    const deque = new Deque()
    deque.addFront(1)
    it.is(deque.size(), 1)

    deque.addFront(2)
    it.is(deque.size(), 2)

    deque.addFront(3)
    it.is(deque.size(), 3)

    deque.removeFront()
    deque.addFront(4)
    it.is(deque.size(), 3)
})

test('Deque: remove elements from the back', it => {
    const deque = new Deque()
    deque.addBack(1);
    deque.addBack(2);
    deque.addBack(3);
    deque.addFront(0);

    it.is(deque.removeBack(), 3)
    it.is(deque.removeBack(), 2)
    it.is(deque.removeBack(), 1)
    it.is(deque.removeBack(), 0)
    it.is(deque.removeBack(), undefined)
})

test('Deque: remove elements from the front', it => {
    const deque = new Deque()
    deque.addFront(1);
    deque.addBack(2);
    deque.addBack(3);
    deque.addFront(0);
    deque.addFront(-1);
    deque.addFront(-2);

    it.is(deque.removeFront(), -2)
    it.is(deque.removeFront(), -1)
    it.is(deque.removeFront(), 0)
    it.is(deque.removeFront(), 1)
    it.is(deque.removeFront(), 2)
    it.is(deque.removeFront(), 3)
    it.is(deque.removeBack(), undefined)
})

test('Deque: allows to peek at the front element in the deque without removing it', it => {
    const deque = new Deque()
    it.is(deque.peekFront(), undefined)

    deque.addFront(1)
    it.is(deque.peekFront(), 1)

    deque.addBack(2)
    it.is(deque.peekFront(), 1)

    deque.addBack(3)
    it.is(deque.peekFront(), 1)

    deque.addFront(0)
    it.is(deque.peekFront(), 0)

    deque.addFront(-1)
    it.is(deque.peekFront(), -1)

    deque.addFront(-2)
    it.is(deque.peekFront(), -2)
})

test('Deque: allows to peek at the last element in the deque without removing it', it => {
    const deque = new Deque()
    it.is(deque.peepBack(), undefined)

    deque.addFront(1)
    it.is(deque.peepBack(), 1)

    deque.addBack(2)
    it.is(deque.peepBack(), 2)

    deque.addBack(3)
    it.is(deque.peepBack(), 3)

    deque.addFront(0)
    it.is(deque.peepBack(), 3)

    deque.addFront(-1)
    it.is(deque.peepBack(), 3)

    deque.addFront(-2)
    it.is(deque.peepBack(), 3)
})

test('Deque: returns the correct size', it => {
    const deque = new Deque()
    it.is(deque.size(), 0)

    deque.addFront(1)
    it.is(deque.size(), 1)

    deque.addBack(2)
    it.is(deque.size(), 2)

    deque.addBack(3)
    it.is(deque.size(), 3)

    deque.addFront(0)
    it.is(deque.size(), 4)

    deque.addFront(-1)
    it.is(deque.size(), 5)

    deque.addFront(-2)
    it.is(deque.size(), 6)

    deque.clear()
    it.is(deque.size(), 0)

    deque.addFront(1);
    deque.addBack(2);
    it.is(deque.size(), 2)

    deque.removeFront();
    deque.removeBack();
    it.is(deque.size(), 0)
})

test('Deque: returns if it is empty', it => {
    const deque = new Deque()
    it.true(deque.isEmpty())

    deque.addFront(1)
    it.false(deque.isEmpty())
    deque.addBack(2)
    it.false(deque.isEmpty())

    deque.clear()
    it.true(deque.isEmpty())

    deque.addFront(1);
    deque.addBack(2);
    it.false(deque.isEmpty())

    deque.removeFront();
    it.false(deque.isEmpty())

    deque.removeBack();
    it.true(deque.isEmpty())
})

test('Deque: clears the queue', it => {
    const deque = new Deque()
    deque.clear()
    it.true(deque.isEmpty())

    deque.addFront(1);
    deque.addBack(2);
    it.false(deque.isEmpty())

    deque.clear()
    it.true(deque.isEmpty())
})

test('Deque: returns toString primitive types', it => {
    const deque = new Deque()
    it.is(deque.toString(), '')

    deque.addFront(1);
    it.is(deque.toString(), '1')

    deque.addBack(2)
    it.is(deque.toString(), '1,2')

    deque.clear();
    it.is(deque.toString(), '')

    deque.addFront('el1')
    it.is(deque.toString(), 'el1')

    deque.addBack('el2')
    it.is(deque.toString(), 'el1,el2')
})

test('Deque: returns toString objects', it => {
    const deque = new Deque()
    it.is(deque.toString(), '')

    deque.addFront(new MyObj(1, 2))
    it.is(deque.toString(), '1|2')

    deque.addBack(new MyObj(3, 4))
    it.is(deque.toString(), '1|2,3|4')
})