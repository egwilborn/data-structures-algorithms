// radix sort essentially sorts based on each digit by placing the numbers into ordered buckets
//based on each digit
// need some helper functions to implement radix sort
//first helper function is a way to access each individual digit in a number

//Math.abs -- allows it to process negative numbers
//you divide by 10^i then get rid of decimal with math.floor, divide by ten and take the remainded
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// console.log(getDigit(7489, 3));

// next we need a helper function to count how many digits are in a number
//we basically take log base 10 of the number, remove the decimals, then add one

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// need a helper function to determine max number of digits a number has in a list of numbers
// – takes a list of numbers than tells us what the maximum number of digits is in the list
// – just the number of digits need to be returned

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}
// console.log(mostDigits([23, 567, 98, 12234324, 90]));

// maxDigits = Math.max(maxDigits, digitCount(nums[i])); //compares the current value of maxDigits and the currenct num in the array, then assigns the largest one to max digits

// Radix Sort PseudoCode
// –define a function that accepts list of numbers
// – figure out how many digits the larges number has
// Loop from k = 0 up to this largest number of digits
// – for each iteration of the loop:
// 	– create buckets for each digit (0-9) (array of arrays)
// 	– place each number in the corresponding bucket based on it’s kth digit
// – replace our existing array with values in our buckets, starting with 0 and going up to 9
// – return the list at the end
function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    //we will pass k into get digit as the digit place
    let digitBuckets = Array.from({ length: 10 }, () => []);
    // then we make a loop that puts the numbers in their corresponding digit bucket for each place 1-4
    for (let i = 0; i < nums.length; i++) {
      // getDigit(nums[i],k) // this will return the digit value for the k place in each num
      // this line pushes the current number in the array into the array bucket corresponding to the value of the k digit
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
      // now we need to put them into a new array in the new order
    }
    // console.log(digitBuckets);
    nums = [].concat(...digitBuckets);
    return nums;
  }
}

radixSort([23, 345, 5467, 12, 2345, 9852]);
// returns [ 12, 23, 345, 2345, 5467, 9852 ]
