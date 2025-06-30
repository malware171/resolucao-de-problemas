"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }
    add(vertice1, vertice2) {
        var _a, _b;
        this.addNode(vertice1);
        this.addNode(vertice2);
        (_a = this.adjacencyList.get(vertice1)) === null || _a === void 0 ? void 0 : _a.push(vertice2);
        (_b = this.adjacencyList.get(vertice2)) === null || _b === void 0 ? void 0 : _b.push(vertice1);
    }
    addNode(vertice) {
        if (!this.adjacencyList.has(vertice)) {
            this.adjacencyList.set(vertice, []);
        }
    }
}
exports.default = Graph;
// FOI USADO COMO REFERENCIA O SITE
//https://stackfull.dev/graph-data-structure-in-typescript
// PARA FAZER A BUSCA COM BFS, PARA PERCORRER TODOS OS PONTOS
