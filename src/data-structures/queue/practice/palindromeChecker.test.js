import test from "ava";
import {palindromeChecker} from "./palindromeChecker.js";

test('Deque palindromeChecker', it => {
    it.true(palindromeChecker('a'))
    it.true(palindromeChecker('aa'))
    it.true(palindromeChecker('kayak'))
    it.true(palindromeChecker('level'))
    it.true(palindromeChecker('Was it a car or a cat I saw'))
    it.true(palindromeChecker('Step on no pets'))
})