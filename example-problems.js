// function addUpTo(n) {
//   return n*(n+1)/2;
// }
// const t1 = performance.now();
// addUpTo(100000)
// const t2=performance.now();
// console.log(`${(t2-t1)/1000} seconds`)

///////////////////////////////////////////////
//FREQUENCY COUNTER

function validAnagram(string1, string2) {
  // add whatever parameters you deem necessary - good luck!

  //break down the two strings into objects containing each letters frequency
  let string1Object = {};
  let string2Object = {};

  //first string
  for (const char of string1) {
    char in string1Object ? string1Object[char]++ : (string1Object[char] = 1);
  }
  console.log(string1Object);

  // second string
  for (const char of string2) {
    char in string2Object ? string2Object[char]++ : (string2Object[char] = 1);
  }
  console.log(string2Object);

  //now you check to see if string1Object contains the chars in string 2 and if their frequencies are the same
  for (let char of string1) {
    if (!(char in string2Object)) {
      return false;
    }
    if (string2Object[char] !== string1Object[char]) {
      return false;
    }
  }
  return true;
}

// console.log(validAnagram("", "")) // true
// console.log(validAnagram("aba", "abb")) // false
// console.log(validAnagram("anagram", "nagaram")) // true
// console.log(validAnagram("rat","car")) // false) // false
// console.log(validAnagram('awesome', 'awesom')) // false
// console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
// console.log(validAnagram('qwerty', 'qeywrt')) // true
// console.log(validAnagram('texttwisttime', 'timetwisttext'))

/////////////////////////////////////
// MULTIPLE POINTERS
//example one -- two pointers at either end
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
// console.log(sumZero([-4,-3,-2,-1,0,1,2,3,7]))
// console.log(sumZero([-4,-3,-2,-1,0,5,6,7]))

// example two -- start two pointers at the begining

function countUniqueValues(arr) {
  let i = 0;
  let j = 1;
  let count = 1;
  if (arr.length === 0) {
    return 0;
  } else {
    while (j < arr.length) {
      if (arr[i] === arr[j]) {
        j++;
      } else {
        count++;
        i = j;
        j++;
      }
    }
  }
  return count;
}
// console.log(countUniqueValues([1,1,1,1,1,2])) // 2
// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
// console.log(countUniqueValues([])) // 0
// console.log(countUniqueValues([-2,-1,-1,0,1])) // 4

///////////////////////////////////
//Sliding window
//example one:
// write a function called maxArraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null; // must have at least as many numbers in the array as is called for in num
  //this loop sums the first set of n numbers
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum; // assign the sum from the first set to max sum
  // then you loop over the entire array
  // and compare the sums based on subtracting the first number, then adding the next number
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
// console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3)) // 19
