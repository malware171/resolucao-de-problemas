"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    addVertice(vertice) {
        if (!this.adjacencyList.has(vertice)) {
            this.adjacencyList.set(vertice, []);
        }
    }
    addAresta(verticeKey, vertice) {
        var _a;
        this.addVertice(verticeKey);
        this.addVertice(vertice);
        (_a = this.adjacencyList.get(verticeKey)) === null || _a === void 0 ? void 0 : _a.push(vertice);
    }
    getNeighbours(verticeKey) {
        for (const [key, value] of this.adjacencyList.entries()) {
            if (key === verticeKey) {
                console.log(`${key} => ${value}`);
            }
        }
    }
    getNoNeighbours(vericeKey) {
        let noNeighbours = [];
        let neighbours = [];
        for (const [key, value] of this.adjacencyList.entries()) {
            noNeighbours.push(key);
            if (key === vericeKey) {
                for (let i = 0; i < value.length; i++)
                    value.forEach((element, index) => {
                        noNeighbours.forEach((element2) => {
                            if (element == element2) {
                                noNeighbours.splice(index, 1);
                            }
                        });
                    });
            }
        }
        console.log(noNeighbours);
    }
}
exports.default = Graph;
let graph = new Graph();
graph.addAresta('a', 'b');
graph.addAresta('a', 'c');
graph.addAresta('c', 'b');
graph.addAresta('d', 'e');
graph.addAresta('d', 'f');
graph.addAresta('f', 'b');
graph.getNeighbours('a');
graph.getNoNeighbours('a');
