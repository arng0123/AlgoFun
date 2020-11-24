// First Attempt
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


//Refactored
function runLengthEncoding(string) {
	let str = []
	let runLength = 1
	
	for(let i = 1; i<string.length; i++){
		let prevChar = string[i-1]
		let currentChar = string[i]
		
		if(runLength === 9 || prevChar !== currentChar){
			str.push(runLength.toString())
			str.push(prevChar)
			runLength = 0
		}
		
		runLength++
	}
	
	str.push(runLength.toString())
	str.push(string[string.length-1])
	
	return str.join('')
	
	}
