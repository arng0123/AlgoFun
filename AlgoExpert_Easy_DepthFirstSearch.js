class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));  //children are new nodes
    return this;
  }

  depthFirstSearch(array) { //takes in an empty array
    array.push(this.name)
		this.children.forEach(child => {
			child.depthFirstSearch(array)
		})
		
		return array //returns left to right
  }
}
