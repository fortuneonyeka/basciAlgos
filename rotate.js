// Ques- Rotate Array by K
//given an integer array nums, rotate array to the right by k steps,
//where k is non-negative.
//inputs: nums = [1,2,3,4,5,6,7], k = 3 ->>>> Output:[3,99,-1,-100]

const rotateArray = (nums, k) => {
      let size = nums.length;

      if (k > size) {
           k = k % size; 
      }

      const rotated = nums.splice(size - k, size);
      nums.unshift(...rotated)
      return nums;
}

// console.log([1,2,3,4,5,6,7]);
// console.log(rotateArray([1,2,3,4,5,6,7], 3));

const rotateArrayOptimized = (nums, k) => {
 const size = nums.length;

 if (k > size) {
      k = k % size
 }
 reverse(nums, 0, nums.length - 1)
 reverse(nums, 0, k - 1)
 reverse(nums, k, nums.length - 1)

 return nums

 //reverse the array : [1,2,3,4,5,6,7] --> [7,6,5,4,3,2,1]
 //then reverse k which are the number of rotations: [7,6,5,4,3,2,1] -->> [5,6,7,4,3,2,1]
 // reverse the remeainder of nums --> [5,6,7,1,2,3,4]
}

function reverse(nums, left, right) {
      while (left <  right) {
            const temp = nums[left]
            nums[left++] = nums[right];
            nums[right--] = temp
      }
}

console.log(rotateArrayOptimized([1,2,3,4,5,6,7], 3));