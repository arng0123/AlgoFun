function caesarCipherEncryptor(string, key) {
	let str = string.split('')
	let alphabet = "abcdefghijklmnopqrstuvwxyz"
	
	for(let i=0; i<str.length; i++) {
		let letterNum = alphabet.indexOf(str[i])
		let newNum = letterNum + key
		
		str[i] = (newNum>=26) ? alphabet.charAt(newNum%26) : alphabet.charAt(newNum)
	}
	
return str.join('')
}
