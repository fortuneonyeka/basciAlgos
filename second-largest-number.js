// Quest 1- Second Largest Number
//Given an array of size N, print the second larget
//distinct element from an array

//input: [12,35,1,10,34,35,1] ----->>>> Output: 34
//input: [10, 5, 10]  ----->>>> Output: 5

//first naive method
const secondLargest = (arr) => {
      //create a set to get distinict elements
     const unique = Array.from(new Set(arr))

     const sorted = unique.sort((a, b) => {
      return b - a
     })

     if (sorted.length >= 2) {
      return sorted[1]
     }else {
      return -1
     }
}

//  console.log(secondLargest([12,35,1,10,34,35,1])); 

//optimized version

const secondLargestOptimized = (arr) => {
 let largest = Number.NEGATIVE_INFINITY;
 let secondLargest = Number.NEGATIVE_INFINITY;

 for (let i = 0; i < arr.length; i++) {
     if (arr[i] > largest) {
           secondLargest = largest
      largest = arr[i]
     }else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
     }
 }
 return secondLargest;
}

console.log(secondLargestOptimized([12,35,1,10,34,35,1]));