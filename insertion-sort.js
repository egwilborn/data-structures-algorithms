// Pseuocode
// – start by picking the second element in the array
// – now compare the second element with the one before it and swap if necessary
// – continue to the next element and if it is in the incorrect order, iterate through the
//sorted portion (i.e. the left side) to place the element in the correct place

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    while (j > -1 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
console.log(insertionSort([0, 7, 8, 3, 2, 1, 18, 5]));
// loop: 1
// subloop: 0
// array: [ 2, 1, 9, 76, 4 ]
// updated array: [ 1, 2, 9, 76, 4 ]
// loop: 2
// loop: 3
// loop: 4
// subloop: 3
// array: [ 1, 2, 9, 76, 4 ]
// updated array: [ 1, 2, 9, 4, 76 ]
// subloop: 2
// array: [ 1, 2, 9, 4, 76 ]
// updated array: [ 1, 2, 9, 4, 76 ]
// [ 1, 2, 9, 4, 76 ]
