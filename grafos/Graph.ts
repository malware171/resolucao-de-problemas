export default class Graph
{
   private adjacencyList: Map<string, string[]>

   public constructor()
   {
      this.adjacencyList = new Map();
   }

   private addVertice(vertice: string): void
   {
      if(!this.adjacencyList.has(vertice)){
         this.adjacencyList.set(vertice, []);
      }
   }

   public addAresta(verticeKey: string, vertice: string): void
   {
      this.addVertice(verticeKey)
      this.addVertice(vertice)

      this.adjacencyList.get(verticeKey)?.push(vertice)
   }

   public getNeighbours(verticeKey: string): void
   {
      for ( const [key, value] of this.adjacencyList.entries()) {
         if(key === verticeKey) {
            console.log(`${key} => ${value}`);
         }
      }
   }

   public getNoNeighbours(vericeKey: string): void
   {
      let noNeighbours: string[] = []
      let neighbours: string[] = []

      for(const[key, value] of this.adjacencyList.entries()) {
         noNeighbours.push(key)

         if(key === vericeKey){
            for(let i = 0; i < value.length; i++) 
            value.forEach((element, index) => { 
               noNeighbours.forEach((element2) => {
                  if(element == element2) {
                     noNeighbours.splice(index, 1)
                     
                  }
               }) 
            })  
         }
      
      }
      console.log(noNeighbours);
   }
}

let graph = new Graph()

graph.addAresta('a', 'b');
graph.addAresta('a', 'c');
graph.addAresta('c', 'b');
graph.addAresta('d', 'e');
graph.addAresta('d', 'f');
graph.addAresta('f', 'b');
graph.getNeighbours('a')
graph.getNoNeighbours('a')
