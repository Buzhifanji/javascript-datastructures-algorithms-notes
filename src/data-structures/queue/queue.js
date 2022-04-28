/**
 * 队列数据结构
 * 特点：先进先出
 * 生活例子：排队
 * 与栈类似，也是采用对象来存储数据
 */

class Queue {
    constructor() {
        this.count = 0; // 追踪最后一个元素
        this.lowestCount = 0; // 追踪第一个元素
        this.items = {}; //
    }

    /**
     * 向队列添加元素: 只能添加到队列末尾。
     * @param element
     */
    enqueue = (element) => {
        this.items[this.count] = element;
        this.count++;
    }
    /**
     *  从队列移除元素
     *  于队列遵循先进先出原则,最
     * 先添加的项也是最先被移除的
     */
    dequeue = () => {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount]; // 最新进的元素
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    /**
     * 查看队列头元素
     * @returns {undefined|*}
     */
    peek = () => {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
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

export {Queue}