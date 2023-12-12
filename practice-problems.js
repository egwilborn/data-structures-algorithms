////////////////////////////
// Practice Problems

// 1) Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

function sameFrequency(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();
  //loop 1 and 2: make an object that contains the frequency of each number in str1 and str2
  let object1 = {};
  let object2 = {};
  for (const char of str1) {
    char in object1 ? object1[char]++ : (object1[char] = 1);
  }
  for (const char of str2) {
    char in object2 ? object2[char]++ : (object2[char] = 1);
  }

  // loop 3: go through either the first string or the first object and compare run two checks: is it in the second string, how often is it in the string

  for (const char of str1) {
    if (!(char in object2)) {
      return false;
    }
    if (object1[char] !== object2[char]) {
      return false;
    }
  }
  return true;
}

// Sample Input:

// console.log(sameFrequency(182,281)) // true
// console.log(sameFrequency(34,14)) // false
// console.log(sameFrequency(3589578, 5879385)) // true
// console.log(sameFrequency(22,222)) // false

// 2) Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

function areThereDuplicates() {
  let args = Object.values(arguments);
  let argsFrequency = {};
  //loop over args and catalogue what values are present
  for (const arg of args) {
    arg in argsFrequency ? argsFrequency[arg]++ : (argsFrequency[arg] = 1);
  }
  //now loop over each key in the object
  for (const key of Object.keys(argsFrequency)) {
    if (argsFrequency[key] > 1) {
      // if the key has a value > 1 than there are duplicates
      return true;
    }
  }
  return false;
}

// console.log(areThereDuplicates(1, 2, 3)) // false
// console.log(areThereDuplicates(1, 2, 2)) // true
// console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true

//3) In a language of your choice, please write a function that will output the indices of the two consecutive elements that have the highest max sum in an input array of integers (e.g., maxPair([0, 5, 5, 2]) will return (1, 2)). In the case of a tie, the method should return the leftmost pair (e.g., maxPair([0, 4, 3, 1, 2, 3, 4, 0]) will return (1, 2)).

function maxPair(nums) {
  let highestSum = -Infinity;
  let i = 0;
  let j = 1;
  let maxPairIdxs = [0, 0];
  while (j < nums.length) {
    if (nums[i] + nums[j] < highestSum) {
      i++;
      j++;
    } else if (nums[i] + nums[j] > highestSum) {
      highestSum = nums[i] + nums[j];
      maxPairIdxs = [i, j];
      i++;
      j++;
    } else {
      i++;
      j++;
    }
  }
  return maxPairIdxs;
}

// console.log(maxPair([0, 4, 3, 1, 2, 3, 4, 0])) //(1, 2)).
// console.log(maxPair([0, 5, 5, 2])) // (1, 2))
// console.log(maxPair([-1,4,0,7,9,4,2]))

//4)  Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

// Sample Input:

//multiple pointers
function averagePair(arr, avg) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if ((arr[i] + arr[j]) / 2 < avg) {
      i++;
    } else if ((arr[i] + arr[j]) / 2 > avg) {
      j--;
    } else {
      return true;
    }
  }
  return false;
}

// console.log(averagePair([1,2,3],2.5)) // true
// console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
// console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
// console.log(averagePair([],4)) // false

//5)  Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

//should be solved using multiple pointers
// Examples:
function isSubsequence(subString, string) {}

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)

//LEET CODE PROBLEMS /////////////////
// 1) Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

function twoSum(arr, target) {
  let map = {};
  arr.forEach(function (element, idx) {
    map[idx] = element;
  });

  for (i = 0; i < arr.length; i++) {
    let diff = target - arr[i];
    if (Object.values(map).includes(diff)) {
      return [i, arr.indexOf(diff)];
    }
  }
}
// console.log(twoSum([1, 8, 7, 20, 6, 10], 18));

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(str) {
  // split the string at the spaces
  const numStringArray = str.split(" ");
  // set the highest and lowest as variables
  // evaluate each component to determine the highest and lowest
  const numIntArray = numStringArray.map((num) => parseInt(num));
  const min = Math.min(...numIntArray);
  const max = Math.max(...numIntArray);
  // return a string with both variables
  return `${max} ${min}`;
}
console.log(highAndLow("1 2 3 4 5")); // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"
