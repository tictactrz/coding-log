# Binary Search
# Implement binary search to find a target value in a sorted array. Return the index of the target if found, or -1 if not found.

arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70]

def binary_search(arr, target):
    low = 0
    high = len(arr) - 1

    while low <= high:
        mid = (low + high) // 2

        if target == arr[mid]:
            return mid
        elif target < arr[mid]:
            high = mid - 1
        elif target > arr[mid]:
            low = mid + 1
        else: 
            return -1

print(binary_search(arr, 25))
print(binary_search(arr, 20))
print(binary_search(arr, 65))
print(binary_search(arr, 80))



# Recursive option

def binary_search_recursive(arr, target, low, high):
    if low > high:
        return -1

    mid = low + (high - low) // 2

    if target == arr[mid]:
        return mid
    elif target < arr[mid]:
        return binary_search_recursive(arr, target, low, mid - 1)
    else:
        return binary_search_recursive(arr, target, mid + 1, high)

print(binary_search_recursive(arr, 25, 0, len(arr) - 1))
