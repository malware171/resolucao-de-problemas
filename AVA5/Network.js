"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// MAURO HENRIQUE GEBARA KACHUTSKI
// DIOGO NERY DE ABREU
const Graph_1 = __importDefault(require("./Graph"));
class Network extends Graph_1.default {
    constructor() {
        super();
    }
    getConnected(node) {
        return this.auxGetConnected(node);
    }
    getNotConnected(node) {
        return this.auxGetNotConnected(node);
    }
    auxGetConnected(node) {
        const queue = [node];
        const visited = new Set([node]);
        const result = [];
        while (queue.length > 0) {
            const verticeAtual = queue.shift();
            if (verticeAtual !== node) {
                result.push(verticeAtual);
            }
            const vizinhos = this.adjacencyList.get(verticeAtual) || [];
            for (const vizinho of vizinhos) {
                if (!visited.has(vizinho)) {
                    visited.add(vizinho);
                    queue.push(vizinho);
                }
            }
        }
        return result.sort();
    }
    auxGetNotConnected(node) {
        const notConnected = [];
        const connected = this.auxGetConnected(node);
        for (const [key] of this.adjacencyList) {
            if (!connected.includes(key) && key !== node) {
                notConnected.push(key);
            }
        }
        return notConnected.sort();
    }
}
exports.default = Network;
let network = new Network();
network.add('e', 'f');
network.add('g', 'e');
network.add('h', 'i');
network.add('a', 'c');
network.add('a', 'b');
network.add('c', 'd');
console.log(network.getConnected('a'));
console.log(network.getNotConnected('a'));
// FOI USADO COMO REFERENCIA O SITE
//https://stackfull.dev/graph-data-structure-in-typescript
// PARA FAZER A BUSCA COM BFS, PARA PERCORRER TODOS OS PONTOS
