let array = [1, 2, 3, 1, 3, 4, 4, 5];

let countMap = {};

// Loop through the array and count the occurrences of each element
array.forEach(element => {
  if (countMap[element] === undefined) {
    countMap[element] = 1;
  } else {
    countMap[element]++;
  }
});

// Log the count for each element
for (let key in countMap) {
  console.log(`Element ${key} occurs ${countMap[key]} times`);
}