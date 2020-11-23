var reorderLogFiles = function(logs) {
 let digits = []
 let chars = []

 for(let i=0; i<logs.length; i++){ 
   let curr = logs[i].split(' ')

   if(isFinite(curr[1])) {
     digits.push(logs[i])
   } else {
     chars.push(logs[i])
   }
 } 


 chars.sort( (a,b) => { 
   let l1 = a.split(' ').slice(1).join(' ')
   let l2 = b.split(' ').slice(1).join(' ')
   
   if(l1 === l2) { 
     return a>b ? 1 : -1
   }
   
   return l1>l2 ? 1 : -1
 })


return chars.concat(digits)
}
