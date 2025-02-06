/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

var reverseString = function (s) {
    // Initialize pointers at start and end of array
    let left = 0;
    let right = s.length - 1;

    // Continue until pointers meet in middle
    while (left < right) {
        let temp = 0;
        // Swap elements using temporary variable
        temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        // Alternative solution using ES6 destructuring for swap:
        // [s[left], s[right]] = [s[right], s[left]];

        // Move pointers towards center
        left++;
        right--;
    }
};



// ### Notes:
// two pointer 
// take first and last indices
// swap 
// left +1
// right -1
// swap again
// finish when at the middle


// Test cases
const test1 = ["h", "e", "l", "l", "o"];
console.log("Test 1 - Basic odd length:");
console.log("Input:", test1);
reverseString(test1);
console.log("Output:", test1);

const test2 = ["H", "a", "n", "n", "a", "h"];
console.log("\nTest 2 - Basic even length:");
console.log("Input:", test2);
reverseString(test2);
console.log("Output:", test2);

const test3 = ["a"];
console.log("\nTest 3 - Single character:");
console.log("Input:", test3);
reverseString(test3);
console.log("Output:", test3);

const test4 = [];
console.log("\nTest 4 - Empty array:");
console.log("Input:", test4);
reverseString(test4);
console.log("Output:", test4);

const test5 = ["1", "2", "3", "4", "5"];
console.log("\nTest 5 - Numbers as strings:");
console.log("Input:", test5);
reverseString(test5);
console.log("Output:", test5);