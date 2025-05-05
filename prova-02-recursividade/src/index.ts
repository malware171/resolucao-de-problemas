import Message from "./Message";

let test1 = new Message("1234")
console.log(`Teste 1\n${test1.reverse()}\n`);

let test2 = new Message("12345")
console.log(`Teste 2\n${test2.reverse()}\n`);

let test3 = new Message("1234321")
console.log(`Teste 3\n${test3.reverse()}\n`);

let test4 = new Message("1")
console.log(`Teste 4\n${test4.reverse()}\n`);
