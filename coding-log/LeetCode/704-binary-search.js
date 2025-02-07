const search = (nums, target) => {
    // search through nums until target is found and then return index
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] < target) {
            left = mid + 1;
        } else { right = mid - 1 }
    }
    return -1;
};

// Test cases
console.log(search([-1, 0, 3, 5, 9, 12], 9));     // Expected: 4
console.log(search([-1, 0, 3, 5, 9, 12], 2));     // Expected: -1
console.log(search([1], 1));                  // Expected: 0
console.log(search([1], 2));                  // Expected: -1
console.log(search([1, 2, 3, 4, 5], 3));         // Expected: 2
console.log(search([1, 2, 3, 4, 5], 5));         // Expected: 4
console.log(search([1, 2, 3, 4, 5], 1));         // Expected: 0
console.log(search([], 5));                   // Expected: -1
console.log(search([-10, -5, 0, 3, 7], -5));     // Expected: 1
console.log(search([2, 5], 5));               // Expected: 1
