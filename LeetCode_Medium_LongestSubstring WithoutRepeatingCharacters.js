var lengthOfLongestSubstring = function(s) {
 
  let longest = 0

  if(!s.length || s.length ===0) return longest


  for(let i=0; i <s.length; i++){
    let temp = s[i]

    let jIdx = 0

      for(let j=i+1; j<s.length; j++){
        if(!temp.includes(s[j])){
          temp += s[j]
        } else {
          jIdx = j-1
          break
        }        
      }

    if(temp.length>longest){
      longest = temp.length
    }

  
  }


  return longest 
}
