"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Network {
    constructor() {
        this.graph = [];
    }
    createNode(str) {
        let node = [str];
        return node;
    }
    contains(str) {
        for (let i = 0; i < this.graph.length; i++) {
            console.log(this.graph);
        }
    }
    add(str) {
        let contains = this.graph.some((node) => node.includes(str));
        if (!contains) {
            let node = this.createNode(str);
            this.graph.push(node);
        }
        else {
        }
    }
    show() {
        console.log(this.graph);
    }
}
exports.default = Network;
let network = new Network();
network.add("b");
network.show();
