//recursive function example

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  let newArr = arr.splice(0, 1);
  return newArr[0] * productOfArray(arr);
}

// console.log(productOfArray([1,2,3]))

// recursive function: practice
function fib(num1) {
  let fibSeq = [];
  function helperFunc(num2) {
    if (num2 === 0) {
      return;
    } else if (num2 === num1 || num2 === num1 - 1) {
      fibSeq.push(1);
      console.log(fibSeq);
      helperFunc(num2 - 1);
    } else {
      fibSeq.push(fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]);
      console.log(fibSeq);
      helperFunc(num2 - 1);
    }
  }
  helperFunc(num1);
  return fibSeq[num1 - 1];
}

// a better way to do what the above function does ^^

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(10))
