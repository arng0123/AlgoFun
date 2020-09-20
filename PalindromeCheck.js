function isPal (str) {
  //make string lowercase
  str = str.toLowerCase()
  
  //base case
  if(str.length<=1){
    return true
    } else if (str[0] !== str[str.length -1 ]) {  //case: first letter against last letter
    return false
    } else {  //case: first and last letter match, slice the string and recurse
      str = str.slice(1, str.length - 1);
      return isPalRecursive(str)
    }
}
