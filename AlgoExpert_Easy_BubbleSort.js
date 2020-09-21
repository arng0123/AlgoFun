function bubbleSort(array) {
  let swap = false
	
	while(!swap){
		swap = true
		
		for(let i=0; i<array.length-1; i++){
			if(array[i+1]<array[i]){
					swap=false
					let curr = array[i]
					array[i] = array [i+1]
					array[i+1] = curr
				}
			}
	}
	
	return array
}


