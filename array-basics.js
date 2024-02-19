const numbers = [1,2,3,4,5,6]

//returns the items that meets the condition
const filteredNums = numbers.filter((item, index) => {
      return item > 2
})

console.log(`FILTER: ${filteredNums}`);

//sums the prev item with the next item and return the single summed number
const sum = numbers.reduce((prev, item)  => {
      return prev +  item
})

console.log(`RDUCE :${sum}`);

//return true if some items the condition
const some = numbers.some((item, idex)  => {
      return item > 3
})
console.log(`SOME: ${some}`);

const array = ["hello", "orange", "banana"]

//return true if all items in the array meets the condition
const every = array.every((item, idex)  => {
      return item.length > 10
})
console.log(`EVERY: ${every}`);

//return the first item that meets the condition, else returns undefine
const findItem = array.find((item, idex)  => {
      return item.length < 6
})
console.log(`FIND: ${findItem}`);


//spreed operator: copies the content of an array or object
const nums = [1,2,3]
const nums2 = [4,5,6]
const finalArray = [...nums, ...nums2]
console.log(finalArray);

//Rest operator used to pass unknown number of paramenters to a function.
const sumFunc = (...numbers) => {
      return numbers
}

console.log(sumFunc(nums, nums2, numbers, 10, "hello"));