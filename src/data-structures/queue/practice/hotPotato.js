import {Queue} from "../queue.js";

/**
 * 模拟的击鼓传花游戏
 * 在这个游戏中，孩子们围成一个圆圈，把花尽快地传递给旁边的人。某一时刻传花停止，
 * 这个时候花在谁手里，谁就退出圆圈、结束游戏。重复这个过程，直到只剩一个孩子（胜者）。
 * @param elementsList
 * @param num
 */

export function hotPotato(elementsList, num) {
    const queue = new Queue()
    const elimitatedList = []; // 缓存淘汰者

    for(let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i])
    }

    while (queue.size() > 1) {
        for(let i = 0; i < num; i++) {
            // 先出列，然后在入列
            queue.enqueue(queue.dequeue())
        }
        // 循环一圈结束后，淘汰一个
        elementsList.push(queue.dequeue())
    }
    return {
        eliminated: elimitatedList,
        winner: queue.dequeue()
    }
}