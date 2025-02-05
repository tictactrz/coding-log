/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Solution #1: 
// Brute Force/Nested Loops - O(n²)
var containsDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
};

// Solution #2: 
// Hash Map - O(n)
var containsDuplicate = function (nums) {
    let hashedNums = {};

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in hashedNums) {
            return true;
        }
        hashedNums[nums[i]] = 1;
    }
    return false;
};



// Test Case 1: Basic duplicate
console.log(containsDuplicate([1, 2, 3, 1]));  // should return true

// Test Case 2: No duplicates
console.log(containsDuplicate([1, 2, 3, 4]));  // should return false

// Test Case 3: Empty array
console.log(containsDuplicate([]));  // should return false

// Test Case 4: Single element
console.log(containsDuplicate([1]));  // should return false

// Test Case 5: All same numbers
console.log(containsDuplicate([1, 1, 1, 1]));  // should return true

// Test Case 6: Large numbers
console.log(containsDuplicate([1000000, 1000000]));  // should return true

// Test Case 7: Negative numbers
console.log(containsDuplicate([-1, -1, -2]));  // should return true

// Test Case 8: Mixed positive/negative
console.log(containsDuplicate([-1, -1, 2, 2]));  // should return true

// Test Case 9: Zero included
console.log(containsDuplicate([0, 1, 0]));  // should return true

// Test Case 10: Longer array
console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 1]));  // should return true
