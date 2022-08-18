// map -> returns new array new array
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