"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    addVertex(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
        }
    }
    addEdge(vertex1, vertex2) {
        var _a;
        this.addVertex(vertex1);
        this.addVertex(vertex2);
        (_a = this.adjacencyList.get(vertex1)) === null || _a === void 0 ? void 0 : _a.push(vertex2);
    }
    printGraph() {
        for (const [vertex, value] of this.adjacencyList.entries()) {
            console.log(`${vertex} -> ${value}`);
        }
    }
}
exports.default = Graph;
let redeSocial = new Graph();
redeSocial.addEdge('Ana', 'Maria');
redeSocial.addEdge('Ana', 'Jose');
redeSocial.addEdge('Jose', 'Pedro');
redeSocial.printGraph();
