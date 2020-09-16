function twoNumberSum(array, targetSum) {
	array.sort((a, b) => a - b)
let head = 0
let tail = array.length-1

while(head<tail){
	let sum = array[head] + array[tail]
	
	if(sum===targetSum){
		return [array[head], array[tail]]
	}else if(sum>targetSum){
		tail-- 
	} else if( sum<targetSum){
		head++
	}
}
	
	return []
}


