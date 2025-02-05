// 🔹 Coding Challenges (JavaScript)

/*
1️⃣ Factorial of a Number (Recursive)
Write a recursive function to find the factorial of a number.
📌 Example Input:
console.log(factorial(5)); // Output: 120
*/
const factorial = (num) => {
    // base case
    if (num === 1) {
        console.log(`Base case reached with num: ${num}`);
        return 1;
    }

    console.log(`Calculating ${num} * factorial(${num - 1})`);
    let result = num * factorial(num - 1);
    console.log(`${num}! = ${result}`);
    return result;
}

// if 5 is the number, the equation is 5 * 4 * 3 * 2 * 1 = 120
console.log(factorial(5)); // Output: 120


/*
2️⃣ Fibonacci Sequence (Recursive)
Write a recursive function to find the nth Fibonacci number.
📌 Example Input:
console.log(fibonacci(6)); // Output: 8
*/


/*
3️⃣ Reverse a String (Recursive)
Write a recursive function to reverse a string.
📌 Example Input:
console.log(reverseString("hello")); // Output: "olleh"
*/


/* 
4️⃣ Sum of an Array (Recursive)
Write a recursive function to find the sum of all numbers in an array.
📌 Example Input:
console.log(sumArray([1, 2, 3, 4])); // Output: 10 
*/



/*
5️⃣ Binary Search (Recursive)
Implement binary search using recursion.
📌 Example Input:
console.log(binarySearch([1, 3, 5, 7, 9], 5)); // Output: Index 2
*/


