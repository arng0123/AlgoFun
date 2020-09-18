class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
	
	//storage Arr
	let sumArr = []
	
	//helper func
	sumCalc(root,0,sumArr)
	
	
	return sumArr
	
}

function sumCalc (root, sum, sumArr) {
	//case if root is valid
	if(!root) return
	
	//updated sum with valid root value
	const newSum = sum + root.value
	
	//case if there are no children => we've hit the bottom of the tree
	if(root.left===null && root.right===null){
		sumArr.push(newSum)
		return
	}
	
	//recursive calls
	sumCalc(root.left, newSum, sumArr)
	sumCalc(root.right, newSum, sumArr)
}
