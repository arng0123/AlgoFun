function runLengthEncoding(string, newStr = '') {
	let curr = string[0]
	let num = 0
			
	if(!string || string.length ===0) return newStr
	
	while(string[num] === curr){
		if(num<9){
			num++
		} else {
			break
		}
	}
	
	newStr += num
	newStr += curr
  
	return runLengthEncoding(string.slice(num), newStr)
}
