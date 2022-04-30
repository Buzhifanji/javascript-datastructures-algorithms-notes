export class Node {
    constructor(element = null, next = null) {
        this.element = element;
        this.next = next;
    }
}

export class DoublyNode extends Node {
    constructor(element, next, prev = null) {
        super(element, next,);
        this.prev = prev
    }
}
