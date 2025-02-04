/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// return indices of the two numbers such that they add up to target.
// For Example: 
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


// Brute Force/Nested Loops - O(n²)
var twoSum1 = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let differenceTarget = target - nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === differenceTarget) {
                return [i, j];
            }

        }
    }
};


// Hash Map - O(n)
var twoSum = function (nums, target) {
    let numsHashMap = {};

    for (let i = 0; i < nums.length; i++) {
        numsHashMap[nums[i]] = i;
    }

    for (let i = 0; i < nums.length; i++) {
        let differenceTarget = target - nums[i];

        if (numsHashMap[differenceTarget] !== undefined && numsHashMap[differenceTarget] !== i) {
            return [i, numsHashMap[differenceTarget]];
        }
    }
};


console.log(twoSum([3, 2, 4], 6));  // Expected output: [1, 2]