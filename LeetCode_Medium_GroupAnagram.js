const ana = (arr) => {
  let storage = {}

  for(let i =0 ; i<arr.length; i++){
    let current = arr[i]
    current = current.split('').sort().join('')
    
    if(storage[current]){
      storage[current].push(arr[i])
    } else {
      storage[current] = [arr[i]]
    }
  }

   return Object.values(storage)
}
