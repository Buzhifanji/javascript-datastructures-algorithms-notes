// 在js 中，数组是一个可以修改的对象。如果添加元素，它会动态增长。
// 在 c c++ 等语言中，数组在声明的时候，就固定了大小，数组填满之后，想要添加新的元素，就要创建一个更大内存的数组，并且把元素复制过去。
// js 底层是基于 c++ 实现的，js 数组修改的时候，也是一样的逻辑。只不过自动帮我们处理，而不是手动复制。

/**
 * 数组开头插入元素
 * 模拟 unshift 方法
 * 时间复杂 O(n), 空间复杂度O(1)
 * @param {*} value
 */
Array.prototype.inserFirstPostion = function (value) {
  // 巧妙利用数组的长度
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
};

// test

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.inserFirstPostion(-1);
console.log("numbers", numbers);

/**
 * 从数组开头删除元素
 * 模拟 shift 方法
 *时间复杂 O(n), 空间复杂度O(n)
 */
Array.prototype.removeFirstPosition = function () {
  // 这里存在一个问题，最后一位是 undefined，数组长度没有改变
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  return this.reIndex(this);
};

/**
 * 将所有不是 undefined 的复制到新的数组中
 * @param {*} myArray
 * @returns
 */
Array.prototype.reIndex = function (myArray) {
  const newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== undefined) {
      newArray.push(myArray[i]);
    }
  }
  return newArray;
};

// test
numbers = numbers.removeFirstPosition();
console.log(numbers);

const a = Array.of("d", 11);

console.log(a);
