/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

var longestCommonPrefix = function (strs) {
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") {
                return prefix;
            }
        };
    };
    return prefix;
};

// Test cases
console.log(longestCommonPrefix(["flower", "flow", "flight"]));  // Should return "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // Should return ""
console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"]));  // Should return "inters"
console.log(longestCommonPrefix(["throne", "throne"]));         // Should return "throne"
console.log(longestCommonPrefix([""]));                         // Should return ""
console.log(longestCommonPrefix(["a"]));                        // Should return "a"
console.log(longestCommonPrefix(["", "b"]));                    // Should return ""
console.log(longestCommonPrefix(["prefix", "prefix", "prefix"])); // Should return "prefix"
console.log(longestCommonPrefix(["abc", "abcd", "abcde"]));     // Should return "abc"

