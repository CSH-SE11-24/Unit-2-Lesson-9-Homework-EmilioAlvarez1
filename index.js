// PART 1: printing with prompt
// Prompt the user for a number and cast it to a number
let number = prompt("enter a number")
number = parseInt(number)

// Prompt the user for another number that is bigger than the first number and cast it to a number
let bNumber = prompt("enter a bigger number")
bNumber = parseInt(bNumber)

// Write a JavaScript program that uses a for loop to print all numbers from the first number to the second number

for(let i = number; i <= bNumber; i++){
  console.log(i)
}





// PART 2: Averaging an array
// Create an array of numbers 
let numbers = [2,4,6,8,10]
// Write a for loop that calculates the sum of the elements 
let add = 0
for(let k = 0; k < numbers.length; k++){
  let some = numbers[k]
  add = add + some
}
 console.log(add)




// Using the sum, calculate the average of all the elements (sum divided by the length of the array)
let Average = add/numbers.length
console.log(Average)

