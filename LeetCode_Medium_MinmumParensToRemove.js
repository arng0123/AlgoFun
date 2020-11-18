var minRemoveToMakeValid = function(s) {
  let split = s.split('')
  let stack = [] //indices of open parens

  for(let i=0; i<split.length; i++){   // On
    //open paren
    if(split[i] === "("){
      stack.push(i)
    } 

    //closed paren and does match
    if(split[i]===")"){
      if(stack.length) {
        stack.pop()
        } else {
          split[i] = "remove"
        }
    } 

    
  }

  while(stack.length){                //Om
    split[stack.pop()] = "remove"
  }

    
  return split.filter(curr => {     //On
    if(curr !== "remove"){
      return curr
    }
  }).join('')
};
