function linearSearch(arr, num) {
  arr.forEach(function (el, idx) {
    if (el === num) {
      return idx;
    }
  });
}
// console.log(linearSearch([10, 15, 20, 25, 30], 15)) // 1)

function binarySearch(arr, value) {
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length - 1;
  if (arr[left] === value) {
    return left;
  } else if (arr[right] === value) {
    return right;
  }
  while (left < right) {
    let middle = Math.trunc((right + left) / 2);
    if (left === middle || right === middle) {
      return -1;
    } else if (arr[middle] === value) {
      return middle;
    } else if (arr[middle] > value) {
      right = middle;
    } else {
      left = middle;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); // 2
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
); // 16
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
); // -1
