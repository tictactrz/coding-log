/*
88. Merge Sorted Array
Easy
Topics
Companies
Hint
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

*/


// SOLUTION 1: 
// Failed because it was solving the solution for a reference of nums1 instead of manipulating nums1 in place

// var merge = function(nums1, m, nums2, n) {
//     nums1 = [...nums1, ...nums2];

//     let left = 0;
//     let right = nums1.length - 1;

//     while (left < right) {
//         if (nums1[left] === 0) {

//             let temp = nums1[left];
//             nums1[left] = nums1[right];
//             nums1[right] = temp;

//             nums1.pop();

//             right--;
//         }
//         left++;
//     }
//     nums1.sort();
//     console.log(nums1);



// SOLUTION 2: 
// O((n+m)log(n+m))
const merge = (nums1, m, nums2, n) => {
    let p1 = m - 1;
    let p2 = n - 1;
    let endOfNums1 = n + m;

    while (p1 < endOfNums1 && p2 >= 0) {
        if (nums1[p1] === 0) {
            nums1[p1] = nums2[p2];
            p2--;
        }
        p1++
    }
    nums1.sort((a, b) => a - b);
};


// Test cases
console.log('Failed test:');
let nums1 = [-1,-1,0,0,0,0];
let nums2 = [-1, 0];
merge(nums1, 4, nums2, 2);
console.log(nums1);  // Expected: [-1,-1,-1,0,0,0]
// actual output: [ -1, -1, -1, 0, 0, undefined ]
