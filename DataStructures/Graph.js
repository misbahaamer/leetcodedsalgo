//undirected unweighted
class Graph{
    constructor(){
        this.NumberOfNodes = 0;
        this.AdjacentList = {};
    }

    AddVertex(node){
        this.AdjacentList[node] = [];
        this.NumberOfNodes++;
    }
    AddEdge(node1, node2){
        this.AdjacentList[node1].push(node2);
        this.AdjacentList[node2].push(node1);
    }
    ShowConnections(){

    }
}