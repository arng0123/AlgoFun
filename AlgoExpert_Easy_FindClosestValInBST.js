function findClosestValueInBst(tree, target) {
return helper(tree,target,currClosest = Infinity)
}

function helper (tree,target,currClosest) {
	
	//Base Case
	if(!tree){
		return currClosest
	}
	
	//Case: Reassign the currClosest variable 
	if( Math.abs(target-currClosest) > Math.abs(target-tree.value) ){
		currClosest = tree.value
	} 
	
	//Case: Recurse on either side of the tree or return 
	if (target>tree.value) {
		return helper(tree.right,target,currClosest)
	} else if (target<tree.value){
		return helper(tree.left,target,currClosest)
	} else {
		return currClosest
	}
}


// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
