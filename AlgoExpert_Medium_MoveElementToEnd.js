function moveElementToEnd(array, toMove) {
	let left = 0
	let right = array.length -1
	
	while(left<right){
		
		if(array[left] === toMove){
			array[left] = array[right]
			array[right] = toMove
			right--
		} else {
			left ++
		}	
	}
	
	return array
}
