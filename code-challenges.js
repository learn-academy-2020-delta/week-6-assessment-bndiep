// ASSESSMENT 6: JavaScript Coding Practical Questions


// --------------------1) Create a function that takes in an array of objects and returns a sentence about each person with their names capitalized.

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output example: "Ford Prefect is a hitchhiker." "Zaphod Beeblebrox is a president of the galaxy." "Arthus Dent is a radio employee."
// declare a function that takes array as argument
const sentenceMaker = (array) => {
  // ** looking back, I could have probably destructored the objects from the array **
  // need to do this process for each object, so will have to map through the objects
  return array.map(object => {
    // split the string into it's own index in array
    let splitNames = object.name.split(" ")
    // console.log(`at index ${index}: ${splitNames}`)
    // map through each subarray to capitalized the first letter of index
    // basically go through all the words in the name (so map through 2 items in the name array)
    let upperCaseName = splitNames.map(word => {
      // make sure to split the word into letters
      let splitWord = word.split("")
      // console.log(splitWord)
      // only capitalize the first letter of each word 
      // reassign the word to be the uppercased first letter and the remaining letters after splitting at index 1 (joined)
      return word = splitWord[0].toUpperCase() + splitWord.slice(1).join("")
      // console.log(splitWord[0].toUpperCase())
      // then join the name together
    }).join(" ")
      // concat the occupation and "is a" and period to form a sentence 
      return upperCaseName.concat(" is a ").concat( object.occupation).concat(".")
      // then return all the sentences by joining them (so we convert the array of sentences to a string of 3 sentences)
  }).join(" ")
}

console.log(sentenceMaker(people))


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDER of the numbers when divided by 3.

var testingArray1 = [23, "Heyyyy!", 45, -9, 0, "Yo", false]
// Expected output: [ 2, 0, -0, 0 ]
var testingArray2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]
// declare a function that takes an array (of mixed data)
const numOnlyDivBy3Remainder = (array) => {
  // filter the array for only typeof "number"
  return array.filter(value => typeof value === "number")
  // map through the number array and use modulo 3 to get the raminder of each number
  // return that filtered/mapped array
  .map(number => number % 3)
}

console.log(numOnlyDivBy3Remainder(testingArray1))
console.log(numOnlyDivBy3Remainder(testingArray2))


// --------------------3) Create a function that takes in two arrays as arguments returns one array with no duplicate values.

var testingArray3 = [3, 7, "hi", 10, 3, "hello", 4, "hi"]
var testingArray4 = [7, "hi", 3, 1, "hi", 4, "hello", 4, 7]
// Expected output: [ 3, 7, "hi", 10, "hello", 4, 1 ]
// declare function that takes any number of arrays as arguments (because it's more dynamic this way)
const noDuplicates = (...array) => {
  // concat the arrays so we have just one array to work with
  let singleArray = [].concat(...array)
  // filter for first instance of the item (so no duplicates) using indexOf
  return singleArray.filter((value, index) => singleArray.indexOf(value) === index)
  // return the single filtered array of non-duplicate numbers
}

console.log(noDuplicates(testingArray3,testingArray4))