# Sample Coding Questions
# Linear Search
# Write a function that implements linear search to find a target value in an array. If the target exists, return its index; otherwise, return -1.


# def linear_search(arr, target):
#     # Your code here

# Modify the function to count the number of occurrences of the target value in the array.

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


def linear_search(arr, target):
    operations_counter = 0

    for i in range(len(arr)):
        operations_counter += 1
        if arr[i] == target:
            return i
    return -1
        

print(linear_search(arr, 7))