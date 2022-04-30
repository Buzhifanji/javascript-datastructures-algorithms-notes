import {defaultEquals} from "../../util.js";
import {Node} from "../models/linked-list-models.js";

/**
 * 链表：动态数据结构
 * 数组：大小都是固定的
 * eg：火车
 */
export class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0
        this.head = null // 记录头部
        this.equalsFn = equalsFn // 元素对比方法
    }

    /**
     * 向链表尾部添加元素
     * @param element
     */
    push = (element) => {
        const node = new Node(element)
        if(this.head === null) {
            this.head = node
        } else {
            let current = this.head
            while (current.next !== null) { // 获得最后一项
                current = current.next
            }
            current.next = node // 将其next赋为新元素，建立链接
        }
        this.count++
    }
    /**
     * 从链表中移除指定位置元素
     * @param index
     * @returns {undefined|*}
     */
    removeAt = index => {
        // 检查越界值
        if(index >= 0 && index < this.count) {
            let current = this.head

            // 移除第一项
            if(index === 0) {
                this.head = current.next
            } else {
                const previous = this.getElementAt(index - 1)
                current = previous.next
                // 将 previous 与 current 的下一项链接起来：跳过 current，从而移除它
                previous.next = current.next
            }
            this.count--
            return current.element
        }
        return undefined
    }
    /**
     * 根据索引找到对应的节点
     * @param index
     * @returns {null|undefined}
     */
    getElementAt = index => {
        // 检查越界值
        if(index >= 0 && index < this.count) {
            let node = this.head
            for(let i = 0; i < index && node !== null; i++) {
                node = node.next
            }
            return node
        }
        return undefined
    }
    /**
     * 把元素插入到指定位置
     * @param element
     * @param index
     * @returns {boolean}
     */
    insert = (element, index) => {
        if(index >= 0 && index <= this.count) {
            const node = new Node(element)
            if(index === 0) { // 在第一个位置添加
                node.next = this.head
                this.head = node
            } else {
                const previous = this.getElementAt(index - 1)
                node.next = previous.next
                previous.next = node
            }
            this.count++
            return true
        }
        return  false
    }
    /**
     * 返回一个元素的位置
     * @param element
     * @returns {number}
     */
    indexOf = (element) => {
        let current = this.head
        for(let i = 0; i < this.count && current !== null; i++) {
            if(this.equalsFn(element, current.element)) {
                return i
            }
            current = current.next
        }
        return -1
    }
    /**
     * 从链表中移除指定元素
     * @param element
     * @returns {*|undefined}
     */
    remove = (element) => {
        const index = this.indexOf(element)
        return this.removeAt(index)
    }
    isEmpty = () => {
        return this.size() === 0
    }
    clear = () => {
        this.head = null
        this.count = 0
    }
    size = () => {
        return this.count
    }
    getHead = () => {
        return this.head
    }
    toString = () => {
        if(this.head === null) {
            return ''
        }
        let objString = `${this.head.element}`;
        let current = this.head.next
        for(let i = 1; i < this.count && current !== null; i++) {
            objString = `${objString},${current.element}`;
            current = current.next
        }
        return objString
    }
}