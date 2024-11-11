//string
const name = "Anku "
const repoCount = 5

//console.log(name + repoCount + " value")  // old method to write this now learn modern below

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// above we used back ticks and called string interpolation

const gameName = new String("ankuac")

//console.log(gameName[0])
//console.log(gameName.__proto__)

//console.log(gameName.length)
//console.log(gameName.toUpperCase())

console.log(gameName.charAt(5))
console.log(gameName.indexOf('a'))

const newString = gameName.substring(0, 6)
console.log(newString)

const anotheString = gameName.slice(-8, 4)
console.log(anotheString)

const newStringOne =  "    hitesh   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://anku.com/anku%20kumar"
console.log(url.replace('%20', '-'))

console.log(gameName.split('-'))