// Psuedocode for bubble swap
// – Start looping from with a variable called i the end of the array towards the beginning
// 00 start an inner loop with a variable called j from the beginning until i-1
// If arr[j] is greater than arr[j+1], swap those two values
// Return the sorted array
// – can add a variable called no swaps where if you run through a loop of the array and don’t make any swaps, you break the loop — if (noSwaps) break;
function bubbleSort(arr) {
  let noSwaps;
  for (let i = 0; i < arr.length; i++) {
    noSwaps = true;
    for (let j = 0; j < arr.length; j++) {
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
