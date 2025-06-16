// MAURO HENRIQUE GEBARA KACHUTSKI
// DIOGO NERY DE ABREU
import Graph from "./Graph";

class Network extends Graph {
   protected adjacencyList!: Map<string, string[]>;

   public constructor() 
   {
      super();
   }
   
   public getConnected(node: string): string[]
   {
      return this.auxGetConnected(node)
   }

   public getNotConnected(node: string): string[]
   {
      return this.auxGetNotConnected(node)
   }

   private auxGetConnected(node: string): string[]
   {
      const queue = [node];
      const visited = new Set([node]);
      const result: string[] = [];

      while (queue.length > 0) {
         const verticeAtual = queue.shift()!;

         if (verticeAtual !== node) {
            result.push(verticeAtual);
         }
         
         const vizinhos = this.adjacencyList.get(verticeAtual) || [];

         for (const vizinho of vizinhos) {
            if (!visited.has(vizinho)) {
               visited.add(vizinho)
               queue.push(vizinho)
            }
         }
      }
      return result.sort()
      
   }

   private auxGetNotConnected(node: string): string[]
   {
      const notConnected: string[] = []
      const connected = this.auxGetConnected(node)

      for(const [key] of this.adjacencyList) {
         
         if(!connected.includes(key) && key !== node) {
            notConnected.push(key)
         } 
      }
      return notConnected.sort();
   }
}

let network = new Network();

network.add('e', 'f')
network.add('g', 'e')
network.add('h', 'i')
network.add('a', 'c')
network.add('a', 'b')
network.add('c', 'd')

console.log(network.getConnected('a'))
console.log(network.getNotConnected('a'))
