function threeNumberSum(array, targetSum) {
	array.sort((a,b) => a-b)
	let storageArr = []
	
	for(let i=0; i<array.length; i++){
		let pointer1 = array[i]
		let pointer2 = i+1
		let pointer3 = array.length-1
		
		while(pointer2 < pointer3) {
			let totalSum = pointer1 + array[pointer2] + array[pointer3]
			
			if(totalSum === targetSum) {
				storageArr.push([pointer1, array[pointer2], array[pointer3]])
				pointer2++
				pointer3--
			} else if (totalSum > targetSum){
				pointer3--
			} else if (targetSum > totalSum){
				pointer2++
			}
		}
	}
	
	return storageArr
}
