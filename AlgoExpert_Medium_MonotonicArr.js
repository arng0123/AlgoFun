function isMonotonic(array) {
	let increase = true
	let decrease = true
	
	for (let i=1; i<array.length; i++) {
		if(array[i]>array[i-1]) {
			decrease = false
		} else if(array[i]<array[i-1]) {
			increase = false
		}
	}
	
	return increase || decrease ? true : false
}
