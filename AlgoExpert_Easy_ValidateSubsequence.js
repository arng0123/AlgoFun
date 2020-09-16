function isValidSubsequence(array, sequence) {
  // Write your code here.
	const copy = sequence.slice(0)
	
	for(let i = 0; i<array.length; i++){
		if(array[i] === copy[0]){
			copy.shift()
		}
	}
	
	return copy.length === 0 ? true : false
}
