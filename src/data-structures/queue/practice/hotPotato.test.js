import test from "ava";
import {hotPotato} from "./hotPotato.js";

test('queue hotPotato', it => {
    const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
    const result = hotPotato(names, 7)
    it.is(result.winner, 'John')
})