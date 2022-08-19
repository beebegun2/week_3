/* map -> returns new array new array
const numArr = [1, 2, 3, 4]
// reduce -> call back function, optional initial value, within the callback function 2 args, previous value and current value
function multiplyByTwo(arr){
    const multipliedArr = arr.map(function(element) {
        return element * 2
    })
    return multipliedArr
}

console.log(multiplyByTwo(numArr))


// filter -> returns shallow copy, function that passes a 'test'

// for each -> doesn't return, calls function for each element in array
// let fruits = ['apple', 'orange', 'banana']
// let forEachFruits = fruits.forEach(function(fruit) {
//   console.log(fruit + '!')
//   return fruit + '!'
// })
// console.log(forEachFruits)

// slice -> return shallow copy of array

// splice -> mutates original array
*/
console.log('hello')

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log("original array",ages)
let firstEl = ages.shift(); // shift method allows me to remove the first element of an array
console.log("first element",firstEl);

let lastEl = ages.pop(); // pop method allows me to remove the last elemtn of an array
console.log("last element",lastEl);

console.log(lastEl-firstEl)


ages.push(100);

console.log("ages after push",ages)


console.log(firstEl)
console.log(lastEl - firstEl)

//first need to add all elements in the array and store in sum
//then we need to divide the sum by the number of elements in the array

//let total = 0; 

for(let i = 0; i < ages.length; i++){
    total = total + ages[i];
    // 0 = 0 + 3
    // 3 = 3 + 9
    // 12 = 12 + 23 etc...
}
console.log(total)

let names = ['Shannon', 'Jamie', 'Josh']
console.log(names.length);

let total = 0
for(let i = 0; i < names.length; i++) {
    console.log(names[i].length)
    total = total + names[i].length
}
console.log(total)

let random = [1, 'Fred', true, 2, 3]
console.log(random.length);

for(let i = 0; i < random.length; i++) {
    console.log(random[i])
}

let sum = 0
for (let i = 0; i< myNames.length; i++) {
    console.log(myNames[i].length)
    sum += myNames[i].length
    sum = sum + myNames[i].length
}