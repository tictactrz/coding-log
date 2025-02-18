/*
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.


Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

*/

// Solution #1:
// O(n log n)
const sortedSquares = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] * nums[i];
    }

    nums.sort((a, b) => a - b);

    return nums;
};

let nums = [-7,-3,2,3,11];
console.log(sortedSquares(nums));



// Solution #2:
// two pointer solution 
// O(n)
var sortedSquares2 = function(nums) {
    let result = new Array(nums.length);
    let l = 0
    let r = nums.length - 1;
    let pos = nums.length - 1;

    while (l <= r) {
        let leftSquare = nums[l] * nums[l];
        let rightSquare = nums[r] * nums[r];

        if (leftSquare > rightSquare) {
            result[pos] = leftSquare;
            l++; 
        } else {
            result[pos] = rightSquare;
            r--;
        }
        pos--;
    }

    return result;
};