var subarraySum = function(nums, k) {

  let holder = {0:1}
  let sum = 0 
  let counter = 0 

//loop through array
  for(let i=0; i<nums.length; i++) {
    //at every idx we're going to add to the sum 
    // add this to the holder var => sum : num[i]
    // look up in holder var if num[i]-K exists then add count var
    
    sum += nums[i]

    if( holder[sum-k] ){
      counter += holder[sum-k]
    } 


    if(!holder[sum]){
      holder[sum] = 1
    }else{
      holder[sum] +=1
    }
    
  }
  return counter
}
