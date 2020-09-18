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
    array.push(this.name) //push the current name
		this.children.forEach(child => {  //recusrively go through each child to add to the array
			child.depthFirstSearch(array)
		})
		
		return array //returns left to right
  }
}
