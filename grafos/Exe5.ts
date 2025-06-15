export default class Network {
  private graph: string[][] = [];

  private createNode(str: string): string[] {
    let node: string[] = [str];
    return node;
  }

  public contains(str: string): void {
    for (let i = 0; i < this.graph.length; i++) {
      console.log(this.graph);
    }
  }

  public add(str: string): void {
    let contains = this.graph.some((node) => node.includes(str));
    if (!contains) {
      let node = this.createNode(str);
      this.graph.push(node);
    } else {
    }
  }

  public show(): void {
    console.log(this.graph);
  }
}

let network = new Network();
network.add("b");
network.show();
