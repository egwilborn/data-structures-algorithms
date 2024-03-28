// Psuedocode for bubble swap
// – Start looping from with a variable called i the end of the array towards the beginning
// 00 start an inner loop with a variable called j from the beginning until i-1
// If arr[j] is greater than arr[j+1], swap those two values
// Return the sorted array
// – can add a variable called no swaps where if you run through a loop of the array and don’t make any swaps, you break the loop — if (noSwaps) break;
function bubbleSort(arr) {
  let noSwaps;
  for (let i = 0; i < arr.length; i++) {
    // console.log("i-loop:", i, "array:", arr);
    noSwaps = true;
    for (let j = 0; j < arr.length; j++) {
      //   console.log("j-loop:", j, "arr:", arr);
      if (arr[j] > arr[j + 1]) {
        //swap!
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([1, 3, 5, 2, 6, 4, 9]));
//output ---------
// i-loop: 0 array: [
//     1, 3, 5, 2,
//     6, 4, 9
//   ]
//   j-loop: 0 arr: [
//     1, 3, 5, 2,
//     6, 4, 9
//   ]
//   j-loop: 1 arr: [
//     1, 3, 5, 2,
//     6, 4, 9
//   ]
//   j-loop: 2 arr: [
//     1, 3, 5, 2,
//     6, 4, 9
//   ]
//   j-loop: 3 arr: [
//     1, 3, 2, 5,
//     6, 4, 9
//   ]
//   j-loop: 4 arr: [
//     1, 3, 2, 5,
//     6, 4, 9
//   ]
//   j-loop: 5 arr: [
//     1, 3, 2, 5,
//     4, 6, 9
//   ]
//   j-loop: 6 arr: [
//     1, 3, 2, 5,
//     4, 6, 9
//   ]
//   i-loop: 1 array: [
//     1, 3, 2, 5,
//     4, 6, 9
//   ]
//   j-loop: 0 arr: [
//     1, 3, 2, 5,
//     4, 6, 9
//   ]
//   j-loop: 1 arr: [
//     1, 3, 2, 5,
//     4, 6, 9
//   ]
//   j-loop: 2 arr: [
//     1, 2, 3, 5,
//     4, 6, 9
//   ]
//   j-loop: 3 arr: [
//     1, 2, 3, 5,
//     4, 6, 9
//   ]
//   j-loop: 4 arr: [
//     1, 2, 3, 4,
//     5, 6, 9
//   ]
//   j-loop: 5 arr: [
//     1, 2, 3, 4,
//     5, 6, 9
//   ]
//   j-loop: 6 arr: [
//     1, 2, 3, 4,
//     5, 6, 9
//   ]
//   i-loop: 2 array: [
//     1, 2, 3, 4,
//     5, 6, 9
//   ]
//   j-loop: 0 arr: [
//     1, 2, 3, 4,
//     5, 6, 9
//   ]
//   j-loop: 1 arr: [
//     1, 2, 3, 4,
//     5, 6, 9
//   ]
//   j-loop: 2 arr: [
//     1, 2, 3, 4,
//     5, 6, 9
//   ]
//   j-loop: 3 arr: [
//     1, 2, 3, 4,
//     5, 6, 9
//   ]
//   j-loop: 4 arr: [
//     1, 2, 3, 4,
//     5, 6, 9
//   ]
//   j-loop: 5 arr: [
//     1, 2, 3, 4,
//     5, 6, 9
//   ]
//   j-loop: 6 arr: [
//     1, 2, 3, 4,
//     5, 6, 9
//   ]
//   [
//     1, 2, 3, 4,
//     5, 6, 9
//   ]
