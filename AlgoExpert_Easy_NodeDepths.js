function nodeDepths(root, level = 0) {
	
	//base case
	if(!root){
		return 0
	}
	
	//each level of the tree is a depth of +1
	//need level variable collector
	//recursive solution
	
	return level + nodeDepths(root.left, level+1) + nodeDepths(root.right, level+1)
	
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
