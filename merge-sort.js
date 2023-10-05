//step one to merge sort is to be able to merge two sorted arrays
// Merging arrays pseudocode
// – create and empty array, take a look at the smallest values in each input array
// – while there are still values we haven’t looked at
// 	– if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
// 	– if the value in the second array is smaller than the value in the first array, push the value from the second array into the results array and move on to the next value in the second array
// 	– once we exhaust all the values from one array, push the remaining values in the other array into the results array

//my solution
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  return results;
}

// console.log(merge([], [2, 4, 5, 7, 10, 11, 12, 13]));

//from course:
function mergeArr(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}
// console.log(mergeArr([1, 2, 5, 6], [2, 4, 5, 7, 10]));

// mergeSort Pseudocode – full algo
// – break up the array into halves until you have arrays that are empty or have one element → using recursive function (with slice)
// – once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// – once the array has been merged back together, return the merged and sorted array

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeArr(left, right); // note: this line only works with the course version of merge not yours
}

console.log(mergeSort([10, 24, 76, 73]));
