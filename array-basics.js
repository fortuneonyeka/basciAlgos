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

//Concat joins two arrays and return a new array without modifying the old arrays
const concatNums = nums.concat(nums2)

console.log(concatNums);

//Slice takes two arguements, start and end. It returns a section of an array based on the start and end indexes but not the end index
const newArray = array.slice(0, 2)
console.log(newArray);

//Splice takes three arguements, start and number of items to be deleted and the item to be added in the same poition. It returns the deleted items of an array based on the start.
const spliceArray = array.splice(1, 2,"cherry")
console.log(spliceArray, array);

//fill replaces every item in an array with a static item or element
const dummyData = [1,2,3,4,5,6]
const fillDumy = dummyData.fill(0)
console.log(fillDumy);

//findindex

const index = nums2.findIndex((item) => item === 5)
console.log(index);

//flat: returns new array with all the nexted arrays concatnated into 1 array this may take argument like 2 for deep nexted array
const nextedArray = [1,[6,[9,[2,3],14],12],[[4,5,],[6,7]]]
const flatArray = nextedArray.flat(3)
console.log(flatArray);

//reverse
const toReverseArray = [1,2,3,4,5,6]
const reversedArray = toReverseArray.reverse()
console.log(reversedArray);

//sort
const unsorted = [10,4,2,9,0,3,5,1,7,6,8]
const sorted = unsorted.sort((a,b) => a - b)
console.log(sorted);