// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:
//console.log(Math.min(...array), Math.max(...array));
// for (let i = 0; i < array.length; i++) {
//         console.log(Math.min(...array), Math.max(...array));
    
// }
let smallest = array[0]; //not set to 0 so it compares your actual values in the array 
let largest = array[0];

for (let i = 0; i < array.length; i++) {
 if (array[i] < smallest) {
    smallest = array[i];
 } else if (array[i] > largest) {
    largest = array[i];
 }
}
console.log(smallest);
console.log(largest);