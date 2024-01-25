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
// console.log(highAndLow("1 2 3 4 5")); // return "5 1"
// console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
// console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"

// A very passive-aggressive co-worker of yours was just fired. While he was gathering his things, he quickly inserted a bug into your system which renamed everything to what looks like jibberish. He left two notes on his desk, one reads: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" while the other reads: "Uif usjdl up uijt lbub jt tjnqmf kvtu sfqmbdf fwfsz mfuufs xjui uif mfuufs uibu dpnft cfgpsf ju".

// Rather than spending hours trying to find the bug itself, you decide to try and decode it.

// If the input is not a string, your function must return "Input is not a string". Your function must be able to handle capital and lower case letters. You will not need to worry about punctuation.

function oneDown(str) {
  const key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (typeof str !== typeof "string") {
    return "Input is not a string";
  }
  const resultArray = [];
  for (let char of str) {
    if (char === " " || char === "," || char === ".") {
      resultArray.push(char);
    }
    const position = key.indexOf(char);
    resultArray.push(key[position - 1]);
  }
  return resultArray.join("");
}

// console.log(oneDown("Ifmmp"));
// console.log(oneDown("Uif usjdl up uijt lbub jt tjnqmf"));
// console.log(oneDown(76));

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
  // define arrays to keep tally of xs and ohs
  let exes = [];
  let ohs = [];
  // loop over string and push xs to exes array and os to ohs array
  for (let char of str) {
    if (char.toLowerCase() === "x") {
      exes.push(char);
    } else if (char.toLowerCase() === "o") {
      ohs.push(char);
    }
  }
  // compare length of arrays and if not the same, false, if the same, true
  if (exes.length === ohs.length) {
    return true;
  } else {
    return false;
  }
}
// Examples input/output:

// console.log(XO("ooxx")); //=> true
// console.log(XO("xooxx")); //=> false
// console.log(XO("ooxXm")); //=> true
// console.log(XO("zpzpzpp")); //=> true // when no 'x' and 'o' is present should return true
// console.log(XO("zzoo")); // => false

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2) {
  // Code
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2;
  } else if (operation === "*") {
    return value1 * value2;
  } else {
    return value1 / value2;
  }
}

// Examples(Operator, value1, value2) --> output
// console.log(basicOp("+", 4, 7)); //--> 11
// console.log(basicOp("-", 15, 18)); //--> -3
// console.log(basicOp("*", 5, 5)); //--> 25
// console.log(basicOp("/", 49, 7)); //--> 7

// This time no story, no theory. The examples below show you how to write function accum:

// function accum(str) {
//   let strArray = [];
//   for (let i = 0; i < str.length + 1; i++) {
//     for (let j = 1; j < i + 1; j++) {
//       const letter = str[i - 1];
//       j === 1
//         ? strArray.push(letter.toUpperCase())
//         : strArray.push(letter.toLowerCase());
//     }
//     strArray.push("-");
//   }
//   strArray.splice(-1, 1);
//   strArray.splice(0, 1);
//   const result = strArray.join("");
//   return result;
//   // console.log(result);
// }

//improvement using repeat function
function accum(str) {
  let strArray = [];
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    console.log(letter);
    let unit = `${letter.toUpperCase()}${letter.toLowerCase().repeat(i)}`;
    strArray.push(unit);
  }
  const result = strArray.join("-");
  return result;
  // console.log(result);
}
// Examples:
// console.log(accum("abcd")); //-> "A-Bb-Ccc-Dddd"
// console.log(accum("RqaEzty")); //-> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// console.log(accum("cwAt")); //-> "C-Ww-Aaa-Tttt"
//The parameter of accum is a string which includes only letters from a..z and A..Z.

// DESCRIPTION:
// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]
function countSmileys(smileys) {
  let count = 0;
  smileys.forEach(function (smiley) {
    if (smiley.includes(":") || smiley.includes(";")) {
      if (smiley.includes("D") || smiley.includes(")")) {
        if (smiley.length === 2) {
          count += 1;
        } else if (
          (smiley.length === 3) &
          (smiley.includes("-") || smiley.includes("~"))
        )
          count += 1;
      }
    }
  });
  return count;
}
// Example
// console.log(countSmileys([":)", ";(", ";}", ":-D"])); // should return 2;
// console.log(countSmileys([";D", ":-(", ":-)", ";~)"])); // should return 3;
// console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"])); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

// Prompt:
// - Write a function named findHighestPriced that accepts a single array of objects.
// - The objects contained in the array are guaranteed to have a price property holding a numeric value.
// - The function should return the object in the array that has the largest value held in the price property.
// - If there's a tie between two or more objects, return the first of those objects in the array.
// - Return the original object, not a copy.
// - DO NOT mutate the array, i.e., do not sort it
// Examples:
// findHighestPriced([
//   { sku: "a1", price: 25 },
//   { sku: "b2", price: 5 },
//   { sku: "c3", price: 50 },
//   { sku: "d4", price: 10 },
// ]);
// //=> { sku: 'c3', price: 50 }
// findHighestPriced([
//   { sku: "a1", price: 25 },
//   { sku: "b2", price: 50 },
//   { sku: "c3", price: 50 },
//   { sku: "d4", price: 10 },
// ]);
//=> { sku: 'b2', price: 50 }
// -----------------------------------------------------------------*/
// // Your solution for 16-findHighestPriced here:

function findHighestPriced(arr) {
  let max = 0;
  let maxIdx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].price > max) {
      max = arr[i].price;
      maxIdx = i;
    }
  }
  return arr[maxIdx];
}

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  let fragments = str.split(/[-,_| ]/);
  let capitalFragments = [];
  for (let i = 0; i < fragments.length; i++) {
    if (i === 0) {
      capitalFragments.push(fragments[i]);
    } else {
      let capitalFragment =
        fragments[i][0].toUpperCase() + fragments[i].slice(1);
      capitalFragments.push(capitalFragment);
    }
  }
  return capitalFragments.join("");
}

// console.log(toCamelCase("the-stealth-warrior"));
// console.log(toCamelCase("The_Stealth_Warrior"));
// console.log(toCamelCase("The_Stealth-Warrior"));

//Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function divideString(str) {
  let evens = [];
  let odds = [];
  let solutionArray = [];
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      evens.push(str[i]);
    } else {
      odds.push(str[i]);
    }
  }
  if (odds.length < evens.length) {
    odds.push("_");
  }
  evens.forEach(function (even, idx) {
    solutionArray.push(`${evens[idx]}${odds[idx]}`);
  });
  return solutionArray;
}
//Examples:

// console.log(divideString("abc")); //=>  ['ab', 'c_']
// console.log(divideString("abcdef")); //=> ['ab', 'cd', 'ef']

// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

function min(arr, toReturn) {
  let min = arr[0];
  let results = { index: 0, value: arr[0] };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      results.index = i;
      results.value = arr[i];
    }
  }
  if (toReturn === "value") {
    return results.value;
  } else if (toReturn === "index") {
    return results.index;
  }
}

// console.log(min([1, 2, 3, 4, 5], "value")); // => 1
// console.log(min([1, 2, 3, 4, 5], "index")); // => 0
// console.log(min([8, 9, 4, 5, 1], "index"));

// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

function cakes(recipe, ingredients) {
  // define an array to hold the possible number of cakes based on the comparison of each ingredient to recipe
  let cakeNums = [];
  for (let key in recipe) {
    if (key in ingredients) {
      let cakeNum = Math.floor(ingredients[key] / recipe[key]);
      cakeNums.push(cakeNum);
    } else {
      return 0;
    }
  }
  return Math.min(...cakeNums);
}
// must return 2
// console.log(
//   cakes(
//     { flour: 500, sugar: 200, eggs: 1 },
//     { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
//   )
// );
// // must return 0
// console.log(
//   cakes(
//     { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
//     { sugar: 500, flour: 2000, milk: 2000 }
//   )
// );

// How can you tell an extrovert from an introvert at NSA?
// Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
// According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

// For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

// Test examples:

function rot13(str) {
  const key = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let result = [];
  for (let char of str) {
    if (!key.includes(char.toLowerCase())) {
      result.push(char);
    } else {
      let decodedCharIndex = key.indexOf(char.toLowerCase()) + 13;
      if (decodedCharIndex > 25) {
        decodedCharIndex = decodedCharIndex - 26;
      }
      if (char === char.toUpperCase()) {
        result.push(key[decodedCharIndex].toUpperCase());
      } else {
        result.push(key[decodedCharIndex]);
      }
    }
  }
  return result.join("");
}
// console.log(rot13("EBG13 rknzcyr.")); //-> "ROT13 example."
// console.log(rot13("This is my first ROT13 excercise!")); // -> "Guvf vf zl svefg EBG13 rkprepvfr!"

//Given an integer array nums, return true if any value appears at least twice in the array,
//and return false if every element is distinct.
function containsDuplicate(nums) {
  //pseudocode
  // make a state variable to store whether the array contains a duplicate
  let includesDuplicate = false;
  //make an object variable that contains each character and its count
  let numsCount = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in numsCount) {
      numsCount[nums[i]] += 1;
      //add logic where if the count increases to greater than one, the state variable is false
      includesDuplicate = true;
      break;
    } else {
      numsCount[nums[i]] = 1;
    }
  }
  return includesDuplicate;
}

// // Example 1:
// console.log(containsDuplicate([1, 2, 3, 1]));
// // Input: nums = [1,2,3,1]
// // Output: true

// // Example 2:
// console.log(containsDuplicate([1, 2, 3, 4]));
// // Input: nums = [1,2,3,4]
// // Output: false

// // Example 3:
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
// // Input: nums = [1,1,1,3,3,4,3,2,4,2]
// // Output: true

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
// The order of the elements may be changed. Then return the number of elements in nums which are not
// equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to
// do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to
// val. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int val = ...; // Value to remove
// int[] expectedNums = [...]; // The expected answer with correct length.
//                             // It is sorted with no values equaling val.

// int k = removeElement(nums, val); // Calls your implementation

// assert k == expectedNums.length;
// sort(nums, 0, k); // Sort the first k elements of nums
// for (int i = 0; i < actualLength; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing
//  0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeElement = function (nums, val) {
  function removeSingleVal(numbers, value) {
    if (!numbers.includes(value)) return nums;
    numbers.splice(numbers.indexOf(val), 1);
    removeSingleVal(numbers, value);
  }

  removeSingleVal(nums, val);

  return nums.length;
};

// console.log(removeElement([3, 2, 2, 3], 3));
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
// console.log(removeElement([1, 2, 3, 2, 2, 2, 2, 2], 2));

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

function majorityElement(nums) {
  let elementCount = {};
  nums.forEach((num) => {
    elementCount[num] ? (elementCount[num] += 1) : (elementCount[num] = 1);
  });
  let majorityEl = null;
  for (const key in elementCount) {
    if (elementCount[key] > nums.length / 2) {
      majorityEl = key;
    }
  }
  return majorityEl;
}

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// majorityElement([3, 2, 3]);
// majorityElement([2, 2, 1, 1, 1, 2, 2]);

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:

// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q
// merged: a p b q c   d

var mergeAlternately = function (word1, word2) {
  // figure out what is longest length of words - store in variable
  let length = word1.length;
  if (word2.length > word1.length) {
    length = word2.length;
  }
  // make variable to store new string
  let merged = [];
  // for loop length of longest word
  for (let i = 0; i < length; i++) {
    if (word1[i]) merged.push(word1[i]);
    if (word2[i]) merged.push(word2[i]);
  }
  return merged.join("");
  // for each i, push that letter into new string variable
};

mergeAlternately("abc", "pqr");
mergeAlternately("ab", "pqrs");
mergeAlternately("abcd", "pq");
