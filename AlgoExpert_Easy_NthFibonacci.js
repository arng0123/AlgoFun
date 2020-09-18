//optimized solution
function getNthFib(n) {
	const prev = [0,1]
	let fib = 3
	
	while (n >= fib) {
		let num = prev[0] + prev [1]
		prev[0] = prev[1]
		prev[1] = num
		fib++
	}
	
	if(n>1){
		return prev[1]
	} else {
		return prev[0]
	}
}



//brute force
function getNthFib(n) {
	let sum = 0

	if(n===2){
		sum =1
	}else if (n>2) {
		sum += getNthFib(n-1) + getNthFib(n-2)
	}

return sum
}
