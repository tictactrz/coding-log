/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true
*/

const canConstruct = (ransomNote, magazine) => {
    let magazineHash = {};

    for (const char of magazine) {
        magazineHash[char] = (magazineHash[char] || 0) + 1;
    }

    for (const char of ransomNote) {
        if (!(char in magazineHash) || magazineHash[char] === 0) {
            return false;
        }
        magazineHash[char] -= 1;
    }
    return true;
};


console.log(canConstruct("aa", "aab"));