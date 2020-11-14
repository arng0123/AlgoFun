var minPathSum = function(grid) {

    let dp = new Array(grid.length).fill([]).map((each)=>new Array(grid[0].length).fill(0))
    dp[0][0] = grid[0][0]


    // Build first row of the DP
    for(let r = 1; r<grid[0].length; r++) {
      dp[0][r] = dp[0][r-1] + grid[0][r]  
    }
    // Build first col of the DP
    for(let c = 1; c<grid.length; c++){
      dp[c][0] = dp[c-1][0] + grid[c][0]
    }

    // the rest of dp: 
    //Outer loop => through the Rows
    //Inner loop => through the Columns
    // (0,1)      
    for(let i= 1; i<grid.length; i++){
      for(let k=1; k<grid[0].length; k++){
        let upper = dp[i-1][k] + grid[i][k] 
        let left = dp[i][k-1] + grid[i][k]
        dp[i][k] = Math.min(upper,left)
      }
    }

    return dp[grid.length-1][grid[0].length-1]
}
