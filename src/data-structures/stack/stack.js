/**
 * 栈 数据结构
 * 特点：先进后出
 * 基于对象实现，为什么不是数组，因为使用数组时候，大部分时间复杂度 O(n)。数组满了，需要扩容。
 */

class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }
  /**
   * 添加元素到栈顶 也就是栈的末尾
   * @param {*} value
   */
  push = (value) => {
    this.items[this.count] = value;
    this.count++;
  };
  /**
   * 移除栈里的元素
   * @returns
   */
  pop = () => {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  };
  /**
   *  查看栈顶元素
   */
  peek = () => {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  };
  /**
   * 检查栈是否为空
   */
  isEmpty = () => {
    return this.count === 0;
  };
  /**
   * 将栈清空
   */
  clear = () => {
    /* 循 LIFO 原则 清除
    while (!this.isEmpty()) {
        this.pop();
      } */
    this.items = {};
    this.count = 0;
  };

  size() {
    return this.count;
  }

  toString = () => {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  };
}
export { Stack }