/*
125. Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

*/

const isPalindrome = (s) => {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '').split("");

    let p1 = 0;
    let p2 = s.length - 1;
    
    for (let i = 0; p1 <= p2; i++) {
        if (s[p1] !== s[p2]) {
            return false;
        }
        p1++;
        p2--;
    }
    return true;

}

console.log("\nTest 1:");
let test1 = "H Eloe leGES d";
console.log(isPalindrome(test1));

console.log("\nTest 2:");
let test2 = "A man, a plan, a canal: Panama";
console.log(isPalindrome(test2));

console.log("\nTest 3:");
let test3 = "race a car";
console.log(isPalindrome(test3));

console.log("\nTest 4:");
let test4 = "race car";
console.log(isPalindrome(test4));