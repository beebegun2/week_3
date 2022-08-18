console.log("welcome")
//created an array of names
// array starts at 0 so Harley = 0 and Shannon = 1
let myNames = ['Harley', 'Shannon'] 
console.log("My names should read", myNames[0,0]);

/*example
let numbers = [ 22, 5, 64, -1, 22];
numbers.length; // 5 there are 5 numbers

console.log(numbers[1]); //5 (starts at 0 so number 1 would display the 2nd number aka 5)

numbers[numbers.length - 1]; //22 - in order to get the last element you need the total numbers of elements minus 1 which pushes the (0) out and you get the last number

function setNums(arrs) {
    arr[2] = 3
    arr[5] = 6
return arr
}
console.log(setNums(numsArr))

// 2.
let cars = ['buick', 'chevy', 'ford', 'honda', 'mini', 'toyota']
// while keeping alphabetical order add 'kia', 'jeep', 'bmw'

function carOrder(arr){
    arr.push('kia', 'jeep','bmw');
    arr.sort();
    console.log(arr);
}

//3.
let board = [
    ['0', '0', 'x'],
    ['', 'x', ''],
    ['', '0', 'x']
]
// finish the board so that x wins
board[2][0] = 'x'
console.log(board)

//4.
const newBoard = []
//using a loop create a 2d array newBoard that looks like the board above, don't worry about populating the board

// 1 loop, from index 0 to index 2, newBoard[i] = ["","",""
// 2 loops, outer loop index - to index 2, in inner loop index 0 to 2 , if its even index i%2 ===0 "x" else "o"

*/


