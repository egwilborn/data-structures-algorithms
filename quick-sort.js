// relies on a pivot helper function
// Pivot Pseudocode
// – it will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
// – grab the pivot from the start of the array
// – store the current pivot index in a variable (this will keep track of where the pivot should end up
// –loop through the array from the start until the end
// 	– if the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
// – swap the starting element (i.e. the pivot) with the pivot index
// – return the pivot index

function pivot(arr, start, end) {}
