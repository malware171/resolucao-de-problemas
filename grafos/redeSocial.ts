export default class Graph {
   private adjacencyList: Map<string, string[]>

   public constructor()
   {
      this.adjacencyList = new Map()
   }

   private addVertex(vertex: string): void
   {
      if(!this.adjacencyList.has(vertex)){
         this.adjacencyList.set(vertex, [])
      }
   }
   public addEdge(vertex1: string, vertex2: string): void
   {
      this.addVertex(vertex1);
      this.addVertex(vertex2);

      this.adjacencyList.get(vertex1)?.push(vertex2);
   }

   public printGraph(): void
   {
      for(const [vertex, value] of this.adjacencyList.entries()){
         console.log(`${vertex} -> ${value}`)
      }
   }

}

let redeSocial = new Graph();

redeSocial.addEdge('Ana', 'Maria');
redeSocial.addEdge('Ana', 'Jose');
redeSocial.addEdge('Jose', 'Pedro');
redeSocial.printGraph()
