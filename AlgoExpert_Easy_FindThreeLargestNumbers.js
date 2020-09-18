function findThreeLargestNumbers(array) {
  let var1 =null
	let var2 =null
	let var3 =null
	
	for(let i=0; i<array.length; i++){
		if (var1 === null || array[i]>var1){
			var3 = var2
			var2 = var1
			var1 = array[i]
		} else if(var2 === null ||array[i] >= var2){
			var3=var2
			var2=array[i]
		} else if(var3 === null ||array[i] >= var3){
			var3=array[i]
		}
	}
	
	
	return [var1, var2,var3].sort(function(a, b){return a-b})
}
