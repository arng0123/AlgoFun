//First Attempt
//Time O(n^2)
//Space O(n)


function arrayOfProducts(array) {

let newArr = new Array(array.length).fill(1)

for(let i=0; i< array.length; i++){
	let value = 1
		
		for(let j=0; j < array.length; j++){
			if(i === j) continue
			
			value *= array[j]
		}
	
	newArr[i] = value
}

return newArr
	
}


//Refactored
//Time O(n)
//Space O(n)

function arrayOfProducts(array) {
  let newArr = new Array(array.length).fill(1)
	
	let left = 1 
	for(let i=0; i<array.length; i++){
		newArr[i] = left //always have to reassign the idx before incrementing the left val
		left *= array[i]
	}
	
	let right = 1
	for(let i=array.length-1; i >= 0; i--){
		newArr[i] *= right //always have to reassign and multiple before incremeneting the right val
		right *= array[i]
	}
	
	return newArr
}
