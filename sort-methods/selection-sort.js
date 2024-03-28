// Pseudo code
// – store the first element as the smallest value you’ve seen so far
// – compare this item to the next item in the array until you find a smaller number
// – not saving the value itself but instead saving the index of the minimum value
// – if a smaller number is found, designate that smaller number to be the new “minimum” and continue until the end of the array
// – if the minimum is not the value (index) you initially began with, swap the two values
// – repeat this with the next element until the array is sorted

// my attempt at selection sort ... don't think i did it right?
function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
      let min = 0; // so you never used min - > see below for using the comparison variable
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        console.log("swap!");
      }
    }
  }
  return arr;
}

// console.log(sort([5, 2, 6, 4]));
//output:
// 5 2
// swap!
// 2 6
// 2 4
// 5 6
// 5 4
// swap!
// 6 5
// swap!
// [ 2, 4, 5, 6 ]

// best solution:
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      console.log(i, lowest);
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));
// loops
// i, j => lowest
//0,1 => 1
//0,2 =>2
//0,3 =>2
//0,4 => 2
