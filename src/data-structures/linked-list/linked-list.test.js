import test from "ava";
import {LinkedList} from "./linked-list.js";
import {MyObj} from "../../util.js";

let min, max, list;

test.beforeEach(() => {
    min = 1
    max = 3
    list = new LinkedList()
})

function pushElements() {
    for (let i = min; i <= max; i++) {
        list.push(i)
    }
}

function verifyList(t) {
    let current = list.getHead()
    for (let i = min; i <= max && current; i++) {
        t.not(current, null) // 测试当前current 是否 空
        if (current) {
            t.not(current.element, null) // 测试当前current.element 是否 空
            t.is(current.element, i)
            if (i < max) { // 测试 下一个
                t.not(current.next, null)
                if (current.next) {
                    t.is(current.next.element, i + 1)
                }
            } else {
                t.is(current.next, null)
            }
            current = current.next;
        }
    }
}

test('LinkedList: empty', t => {
    t.is(list.size(), 0)
    t.true(list.isEmpty())
    t.is(list.getHead(), null)
})

test('LinkedList: push elements', (t) => {
    pushElements()
    verifyList(t)
})

test('LinkedList: returns element at specific index: invalid position', t => {
    t.is(list.getElementAt(3), undefined)
})

test('LinkedList: returns element at specific index', t => {
    let node;

    pushElements()

    for (let i = min; i <= max; i++) {
        node = list.getElementAt(i - 1)
        t.not(node, null)
        if (node) {
            t.is(node.element, i)
        }
    }
})

test('LinkedList: inserts elements first position empty list', t => {
    list.clear()
    const element = 1;
    max = 1;
    t.true(list.insert(element, 0))
    verifyList(t)
})

test('inserts elements first position not empty list', t => {
    list.clear()
    max = 2
    t.true(list.insert(max, 0))
    t.true(list.insert(min, 0))

    verifyList(t)
})

test('inserts elements invalid position empty list', t => {
    t.true(list.insert(1, 1))
})

test('inserts elements invalid position not empty list', t => {
    list.clear()
    const element = 1
    t.true(list.insert(element, 0))
    t.false(list.insert(element, 2))
})

test('inserts elements in the middle of list', t => {
    list.clear()
    max = 3
    t.true(list.insert(3, 0))
    t.true(list.insert(1, 0))
    t.true(list.insert(2, 1))

    verifyList(t)
})

test('inserts elements at the end of list', t => {
    list.clear()
    max = 5
    for (let i = min; i <= max; i++) {
        t.true(list.insert(i, i - 1))
    }
    verifyList(t)
})

test('returns index of elements', t => {
    let index;
    list.clear()
    pushElements()
    for (let i = min; i <= max; i++) {
        index = list.indexOf(i)
        t.is(index, i - 1)
    }

    t.is(list.indexOf(max + 2), -1)
})

test('removes valid elements', t => {
    list.clear()
    pushElements()

    for (let i = min; i <= max; i++) {
        const element = list.remove(i)
        t.not(element, null)
        t.is(element, i)
    }
})

test('removes invalid elements', t => {
    list.clear()
    pushElements()
    for (let i = max + 2; i <= max + 4; i++) {
        const element = list.removeAt(i - 1)
        t.is(element, undefined)
    }
})

test('removes element invalid position empty list', t => {
    list.clear()
    for (let i = min; i <= max; i++) {
        const element = list.removeAt(i - 1)
        t.is(element, undefined)
    }
})

test('removes element invalid position not empty list', t => {
    list.clear()
    pushElements()
    for (let i = max + 2; i <= max + 4; i++) {
        const element = list.removeAt(i)
        t.is(element, undefined)
    }
})

test('removes first element list single element', t => {
    list.clear()
    list.push(1)

    const element = list.removeAt(0)
    t.not(element, null)
    t.is(element, 1)

    t.is(list.getHead(), null)
    t.true(list.isEmpty())
})

test('removes first element list multiple elements', t => {
    pushElements()

    const element = list.removeAt(0)
    t.not(element, null)
    t.is(element, min)

    min = 2
    verifyList(t)
})

test('removes element from middle of list', t => {
    min = 1
    max = 3
    list.clear()
    pushElements() // 1, 2, 3

    const element = list.removeAt(1) // element 2
    t.not(element, null)
    t.is(element, 2)

    // list needs to be [1, 3]
    let current = list.getHead()

    // element 1
    t.not(current, null)
    if (current) {
        t.not(current.element, null)
        t.is(current.element, 1)
        t.not(current.next, null)
        if (current.next) {
            t.is(current.next.element, 3)
            current = current.next
        }
    }

    // element 3
    t.not(current, null)
    if (current) {
        t.not(current.element, null)
        t.is(current.element, 3)
        t.is(current.next, null)
    }
})

test('removes element from end of list', t => {
    list.clear()
    pushElements()

    const maxIndex = max
    for (let i = maxIndex; i >= min; i--) {
        const element = list.removeAt(i - 1)
        t.not(element, null)
        t.is(element, i)
        max--
        verifyList(t)
    }
})

test('returns the head of the list', t => {
    list.clear()
    t.is(list.getHead(), null)
    list.push(1)
    t.not(list.getHead(), null)
})

test('returns the correct size', t => {
    min = 1
    max = 6
    list.clear()
    t.is(list.size(), 0)

    for (let i = min; i <= max; i++) {
        list.push(i)
        t.is(list.size(), i)
    }

    for (let i = min; i <= max; i++) {
        list.remove(i)
        t.is(list.size(), max - i)
    }

    t.is(list.size(), 0)
})

test('returns if it is empty', t => {
    t.true(list.isEmpty())

    for(let i = min; i <= max; i++) {
        list.push(i)
        t.false(list.isEmpty())
    }

    for(let i = min; i < max; i++) {
        list.remove(i)
        t.false(list.isEmpty())
    }

    list.remove(max)
    t.true(list.isEmpty())

    pushElements()
    t.false(list.isEmpty())

    list.clear()
    t.true(list.isEmpty())
})

test('clears the list', t => {
    t.is(list.size(), 0)
    list.clear()

    t.is(list.size(), 0)
    pushElements()
    list.clear()
    t.is(list.size(), 0)
})

test('returns toString primitive types', t => {
    t.is(list.toString(), '')

    list.push(1)
    t.is(list.toString(), '1')

    list.push(2)
    t.is(list.toString(), '1,2')

    list.clear()
    t.is(list.toString(), '')
})

test('returns toString primitive types: string', t => {
    const ds = new LinkedList()
    t.is(ds.toString(), '')

    ds.push('el1')
    t.is(ds.toString(), 'el1')

    ds.push('el2')
    t.is(ds.toString(), 'el1,el2')
})

test('returns toString objects', t => {
    const ds = new LinkedList()
    t.is(ds.toString(), '')

    ds.push(new MyObj(1,2))
    t.is(ds.toString(), '1|2')

    ds.push(new  MyObj(3, 4))
    t.is(ds.toString(), '1|2,3|4')
})