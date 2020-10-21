var isValid = function(s) {
    let arr = s.split('')

    let pairs = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }
    
    let stack = []
    
    for(let i = 0; i<arr.length; i++){
        let current = arr[i]
        
            if(Object.keys(pairs).includes(current)){
                stack.push(current)
            } else {
                let last = stack[stack.length-1]
                    if(pairs[last] === current){
                        stack.pop()
                    } else {
                        return false
                    }
            }
        }
      return stack.length === 0
    }
