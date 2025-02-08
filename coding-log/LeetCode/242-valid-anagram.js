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



// SOLUTION 1: 
// O(n log n) - due to sorting but seems easier to read and understand
var isAnagram = function (s, t) {
    const s_sorted = s.split("").sort().join("");
    const t_sorted = t.split("").sort().join("");

    if (s_sorted === t_sorted) {
        return true;
    } else {
        return false;
    }
};

// SOLUTION 2:
// O(n) - more effecient but more complicated
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let sHash = {};
    let tHash = {};

    for (let char of s) {
        sHash[char] = (sHash[char] || 0) + 1;
    }
    for (let char of t) {
        tHash[char] = (tHash[char] || 0) + 1;
    }

    for (let char in sHash) {
        if (sHash[char] !== tHash[char]) {
            return false;
        }
    }
    return true;
};



// Test cases
console.log('Test 1 - Valid anagrams:');
console.log(isAnagram1("anagram", "nagaram")); // true

console.log('\nTest 2 - Different lengths:');
console.log(isAnagram1("rat", "cars")); // false

console.log('\nTest 3 - Same length but not anagrams:');
console.log(isAnagram1("hello", "world")); // false

console.log('\nTest 4 - Empty strings:');
console.log(isAnagram1("", "")); // true

console.log('\nTest 5 - Single character:');
console.log(isAnagram1("a", "a")); // true

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