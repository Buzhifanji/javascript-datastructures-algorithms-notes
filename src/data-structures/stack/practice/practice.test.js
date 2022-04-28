import test from "ava";
import {decimalToBinary} from "./practice.js";

test('stack practice decimalToBinary', t => {
    t.is(decimalToBinary(100345, 2), '11000011111111001')
    t.is(decimalToBinary(100345, 8), '303771')
    t.is(decimalToBinary(100345, 16), '187F9')
    t.is(decimalToBinary(100345, 35), '2BW0')
})