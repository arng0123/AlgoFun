var hasPathSum = function(root, sum) {
    
    if(root === null) return false

    //Check to see that we've hit a leaf
    if(root.right===null && root.left===null && sum === root.val) return true 
    
    //reassign the value of the sum variable to pass down the tree
    sum = sum - root.val
    
    return hasPathSum(root.right, sum) || hasPathSum(root.left, sum)
    
};
