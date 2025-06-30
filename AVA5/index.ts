import Network from "./Network";

console.clear();

let network = new Network();

network.add("a", "b");
network.add("a", "c");

console.log();
console.log("Teste 1");
console.log(network.getConnected("a"));
console.log(">> [b, c]");

console.log();
console.log("Teste 2");
console.log(network.getNotConnected("a"));
console.log(">> [ ]");

network.add("e", "d");

console.log();
console.log("Teste 3");
console.log(network.getNotConnected("a"));
console.log(">> [d, e]");

console.log();
console.log("Teste 4");
console.log(network.getConnected("d"));
console.log(">> [e]");

network.add("f", "g");
network.add("g", "h");

console.log();
console.log("Teste 5");
console.log(network.getConnected("f"));
console.log(">> [g, h]");

console.log();
console.log("Teste 6");
console.log(network.getNotConnected("f"));
console.log(">> [a, b, c, d, e]");

network.add("e", "a");

console.log();
console.log("Teste 7")
console.log(network.getConnected("c"));
console.log(">> [a, b, d, e]");

network.add("d", "h");

console.log();
console.log("Teste 8")
console.log(network.getConnected("g"));
console.log(">> [a, b, c, d, e, f, h]");