import {Deque} from "../deque.js";

/**
 * 回文检查器
 * 回文是正反都能读通的单词、词组、数或一系列字符的序列，例如 madam或 racecar。
 * @param aString
 * @returns {boolean}
 */
export function palindromeChecker(aString) {
    if (aString === undefined || aString === null || aString.length === 0) {
        return false
    }
    const deque = new Deque()
    // 全部转换成小写，并移除空格
    const lowerString = aString.toLocaleLowerCase().split(' ').join('')
    let result = true;

    for(let i = 0; i < lowerString.length; i++) {
        // 每个字符 入双端队列
        deque.addBack(lowerString.charAt(i))
    }

    while (deque.size() > 1 && result) {
        const firstChar = deque.removeFront()
        const lastChar = deque.removeBack()
        if (firstChar !== lastChar) { // 判断第一个字符和最后一个字符是否相等
            result = false
        }
    }

    return  result
}