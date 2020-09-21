function insertionSort(array) {
	for(let i=1; i<array.length; i++){  
		let prev = i - 1 
		let sort = array[i]
		
		while(prev>=0 && array[prev]>sort){
			array[prev+1]=array[prev]
			prev--
		}
		
		array[prev+1] = sort
	}
	
	return array
}
