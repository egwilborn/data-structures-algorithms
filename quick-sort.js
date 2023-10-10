// relies on a pivot helper function
// Pivot Pseudocode
// – it will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
// – grab the pivot from the start of the array
// – store the current pivot index in a variable (this will keep track of where the pivot should end up
// –loop through the array from the start until the end
// 	– if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
// – swap the starting element (i.e. the pivot) with the pivot index
// – return the pivot index

function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

//pivot([4, 8, 2, 1, 5, 7, 6, 3]); // should return 3 -- the correct index of 4

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); // 3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
// returns
// [
//     1, 2, 3, 4,
//     5, 6, 7, 8
//   ]
