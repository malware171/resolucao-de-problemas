export default class Graph
{
   protected adjacencyList: Map<string, string[]>;

   public constructor() 
   {
      this.adjacencyList = new Map();
   }

   public add(vertice1: string, vertice2: string)
   {
      this.addNode(vertice1);
      this.addNode(vertice2);

      this.adjacencyList.get(vertice1)?.push(vertice2);
      this.adjacencyList.get(vertice2)?.push(vertice1);
   }

   private addNode(vertice: string): void
   {
      if (!this.adjacencyList.has(vertice)) {
         this.adjacencyList.set(vertice, []);
      }
   }
}