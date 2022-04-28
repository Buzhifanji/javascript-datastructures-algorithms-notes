import test from "ava";
import {Queue} from "./queue.js";

test('Queue: empty', t => {
    const queue = new Queue();
    t.true(queue.isEmpty())
    t.is(queue.size(), 0)
})

test('Queue: enqueues elements', t => {
    const queue = new Queue();

    queue.enqueue(1)
    t.is(queue.size(), 1)

    queue.enqueue(2)
    t.is(queue.size(), 2)

    queue.enqueue((3))
    t.is(queue.size(), 3)

    queue.clear()
    t.is(queue.size(), 0)
    t.true(queue.isEmpty())
})

test('Queue: dequeue elements', (t) => {
    const queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    t.is(queue.dequeue(), 1)
    t.is(queue.dequeue(), 2)
    t.is(queue.dequeue(), 3)
    t.is(queue.dequeue(), undefined)
})

test('Queue: implements FIFO logic', t => {
    const queue = new Queue();

    queue.enqueue(1);
    t.is(queue.peek(), 1)

    queue.enqueue(2)
    t.is(queue.peek(), 1)

    queue.enqueue(3)
    t.is(queue.peek(), 1)

    t.is(queue.dequeue(), 1)
    t.is(queue.dequeue(), 2)
    t.is(queue.dequeue(), 3)
    t.is(queue.dequeue(), undefined)
})

test('Queue: allows to peek at the front element in the queue without dequeue it', it => {
    const queue = new Queue();
    it.is(queue.peek(), undefined)

    queue.enqueue(1)
    it.is(queue.peek(), 1)

    queue.enqueue(2)
    it.is(queue.peek(), 1)

    queue.dequeue()
    it.is(queue.peek(), 2)
})

test('Queue: returns the correct size', it => {
    const queue = new Queue();
    it.is(queue.size(), 0)

    queue.enqueue(1)
    it.is(queue.size(), 1)

    queue.enqueue(2)
    it.is(queue.size(), 2)

    queue.enqueue(2)
    it.is(queue.size(), 3)

    queue.clear()
    it.is(queue.size(), 0)

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    it.is(queue.size(), 3)

    queue.dequeue()
    it.is(queue.size(), 2)
    queue.dequeue()
    it.is(queue.size(), 1)
    queue.dequeue()
    it.is(queue.size(), 0)
})

test('Queue: returns if it is empty', it => {
    const queue = new Queue();
    it.true(queue.isEmpty())

    queue.enqueue(1)
    it.false(queue.isEmpty())

    queue.enqueue(2)
    it.false(queue.isEmpty())

    queue.enqueue(3)
    it.false(queue.isEmpty())

    queue.clear()
    it.true(queue.isEmpty())

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    it.false(queue.isEmpty())

    queue.dequeue()
    it.false(queue.isEmpty())

    queue.dequeue()
    it.false(queue.isEmpty())

    queue.dequeue()
    it.true(queue.isEmpty())
})

test('Queue: clears the queue', it => {
    const queue = new Queue();
    queue.clear()
    it.true(queue.isEmpty())

    queue.enqueue(1);
    queue.enqueue(2);
    it.false(queue.isEmpty())

    queue.clear()
    it.true(queue.isEmpty())
})

test('Queue: returns toString primitive types', it => {
    const queue = new Queue();
    it.is(queue.toString(), '')

    queue.enqueue(1)
    it.is(queue.toString(), '1')

    queue.enqueue(2)
    it.is(queue.toString(), '1,2')

    queue.clear()
    it.is(queue.toString(), '')

    queue.enqueue('el1')
    it.is(queue.toString(), 'el1')

    queue.enqueue('el2')
    it.is(queue.toString(), 'el1,el2')
})

test('Queue: returns toString objects', it => {
    class MyObj {
        constructor(el1, el2) {
            this.el1 = el1;
            this.el2 = el2;
        }

        toString() {
            return `${this.el1.toString()}|${this.el2.toString()}`;
        }
    }
    const queue = new Queue();
    it.is(queue.toString(), '')

    queue.enqueue(new MyObj(1, 2))
    it.is(queue.toString(), '1|2')

    queue.enqueue(new MyObj(3,4))
    it.is(queue.toString(), '1|2,3|4')
})