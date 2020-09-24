function smallestDifference(arrayOne, arrayTwo) {
	arrayOne.sort((a,b) => a-b)
	arrayTwo.sort((a,b) => a-b)
	
	let arr1point = 0
	let arr2point = 0
	let absDiff = Infinity
	let returnArr = []
	
	while(arr1point < arrayOne.length && arr2point < arrayTwo.length){
		let arr1 = arrayOne[arr1point]
		let arr2 = arrayTwo[arr2point]
		let currentDiff = Infinity
		
		if(arr1 > arr2){   //Check for if the num from arr1 is larger
			currentDiff = arr1-arr2
			arr2point ++
		} else if (arr2 > arr1){  //Check for if the num from arr2 is larger
			currentDiff = arr2-arr1
			arr1point ++ 
		} else {  //Check for if arr 1 === arr 2
			return [arr1,arr2]
		}
		
		if(currentDiff<absDiff){ 
			absDiff = currentDiff
			returnArr = [arr1,arr2]
		}
	}
	
	return returnArr
}
