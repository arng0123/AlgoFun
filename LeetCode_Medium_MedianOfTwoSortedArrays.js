var findMedianSortedArrays = function(nums1, nums2) {
    let bigArr = [...nums1, ...nums2].sort((a,b) => a-b)
    let length = bigArr.length
    
    console.log(bigArr)
    console.log(length)

    if(length % 2 !== 0){ //odd case
      return bigArr[(length-1)/2]
    } else { //even case
      return (bigArr[length/2] + bigArr[(length/2)-1])/2      
    }

};
