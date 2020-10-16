var partitionLabels = function(S) {

let arr = S.split("")
let obj = arr.reduce((accum, current) => {
  if(!accum[current]){
    accum[current] = arr.lastIndexOf(current)
  }
  return accum
},{})


let newArr = []
let start = -1
let currentHighest = 0

for(let i=0; i<S.length ){  
  currentHighest = Math.max(obj[arr[i]],currentHighest)

  if(i===currentHighest){
    newArr.push(currentHighest - start)
    start = currentHighest
    i=start
    currentHighest = 0
  }
}

return newArr
}
