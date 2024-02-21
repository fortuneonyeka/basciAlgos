// Ques- Rotate Array by K
//given an integer array nums, rotate array to the right by k steps,
//where k is non-negative.
//inputs: nums = [1,2,3,4,5,6,7], k = 3 ->>>> Output:[3,99,-1,-100]

const rotateArray = (nums, k) => {
      let size = nums.length;

      if (size > k) {
           k = k % size; 
      }

      const rotated = nums.splice(size - k, size);
      nums.unshift(...rotated)
      return nums;
}

console.log([1,2,3,4,5,6,7]);
console.log(rotateArray([1,2,3,4,5,6,7], 3));