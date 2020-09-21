function binarySearch(array, target) {
  return pointer(array, target, array.length-1, 0)
}

function pointer(arr, target, right, left){
	let mid = Math.floor((right+left) /2 )
	
	//Base Case
	if(left>right){
		return -1
	}
	
	//Case: array@middle index is equal to target
	if(arr[mid]===target){
		return mid
	}
	
	//Case: array@middle index is greater than or less than, reassign pointers accordingly
	if(arr[mid] > target) {
		return pointer(arr, target,mid-1, left)
	} else  if (arr[mid] < target){
		return pointer(arr, target, right,mid+1)
	} 
	
}
