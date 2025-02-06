/*
Given two strings s and t, return true if t is an 
anagram
 of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false
*/

var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    // doesn't work for cases like this one: 
    // s = "aacc" and t = "ccac"
    // for (let i = 0; i < s.length; i++) {
    //     if (!t.includes(s[i])) {
    //         return false;
    //     };
    // }
    // return true;


    // Brute force - O(n²)
    let sArr = s.split('');
    let tArr = t.split('');

    for (let i = 0; i < sArr.length; i++) {
        for (let j = i + 1; j < tArr.length; j++) {
            if (sArr[i] === tArr[j]) {
                tArr.pop(tArr[j]);
            }
        }
    }




    // Hashmap - O(n)
    
};

// Test cases
console.log('Test 1 - Valid anagrams:');
console.log(isAnagram("anagram", "nagaram")); // true

console.log('\nTest 2 - Different lengths:');
console.log(isAnagram("rat", "cars")); // false

console.log('\nTest 3 - Same length but not anagrams:');
console.log(isAnagram("hello", "world")); // false

console.log('\nTest 4 - Empty strings:');
console.log(isAnagram("", "")); // true

console.log('\nTest 5 - Single character:');
console.log(isAnagram("a", "a")); // true

console.log('\nTest 6 - Repeated characters:');
console.log(isAnagram("aacc", "ccaa")); // true

console.log('\nTest 7 - Case sensitivity:');
console.log(isAnagram("Anagram", "nagaram")); // false

console.log('\nTest 8 - Different frequency of same chars:');
console.log(isAnagram("aa", "a")); // false

console.log('\nTest 9 - Special characters:');
console.log(isAnagram("!@#", "#@!")); // true

console.log('\nTest 10 - Numbers as strings:');
console.log(isAnagram("123", "321")); // true

console.log('\nTest 11 - Not anagrams:');
console.log(isAnagram("rat", "car")); // false