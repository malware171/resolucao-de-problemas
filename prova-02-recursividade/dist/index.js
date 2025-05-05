"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Message_1 = __importDefault(require("./Message"));
let test1 = new Message_1.default("1234");
console.log(`Teste 1\n${test1.reverse()}\n`);
let test2 = new Message_1.default("12345");
console.log(`Teste 2\n${test2.reverse()}\n`);
let test3 = new Message_1.default("1234321");
console.log(`Teste 3\n${test3.reverse()}\n`);
let test4 = new Message_1.default("1");
console.log(`Teste 4\n${test4.reverse()}\n`);
