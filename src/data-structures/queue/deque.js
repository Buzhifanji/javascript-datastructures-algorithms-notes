/**
 * 双端队列数据结构
 * 允许我们同时从前端和后端添加和移除元素的特殊队列。
 * eg: 一个刚买了票的人如果只是还需要再问一些简单的信息，就可以直接回到队伍的头部;
 * eg: 在队伍末尾的人如果赶时间，他可以直接离开队伍
 * 计算机例子：存储一系列的撤销操作
 *
 * 双端队列同时遵守了先进先出和后进先出原则：队列和栈相结合的一种数据结构
 */

class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    /**
     * 向双端队列的前端添加元素
     * @param element
     */
    addFront = (element) => {
        if (this.isEmpty()) { // 双端队列为空
            this.addBack(element)
        } else {
            this.lowestCount--
            this.items[this.lowestCount] = element
        }
    }
    /**
     * 向双端队列的后端添加元素
     * @param element
     */
    addBack = (element) => {
        this.items[this.count] = element
        this.count++
    }
    /**
     * 向双端队列的前端移除第一个元素
     */
    removeFront = () => {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }
    /**
     * 向双端队列的后端移除第一个元素
     */
    removeBack = () => {
        if (this.isEmpty()) {
            return undefined
        }
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }
    /**
     * 返回双端队列前端的第一个元素
     * @returns {undefined|*}
     */
    peekFront = () => {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }
    /**
     * 返回双端队列后端的第一个元素
     * @returns {undefined|*}
     */
    peepBack = () => {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.count - 1]
    }
    isEmpty = () => {
        return this.size() === 0;
    }
    size = () => {
        return this.count - this.lowestCount;
    }
    clear = () => {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
    toString = () => {
        if (this.isEmpty()) {
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}

export {Deque}