// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', `yo-yoe`, `yo-yo`, 'yo-yo', 'Gum', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.

  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/

// Get Length
function getLength(arr, cb) {
  return cb(arr.length);
}

getLength(items, (length) => {
  console.log(length);
})

// Last Item
function last(arr, cb) {
  return cb(arr[arr.length-1])
}

last(items, (lastItem) => {
  console.log(lastItem);
})

// Sum Nums
function sumNums(x, y, cb) {
  return cb(x + y);
}

sumNums(1, 2, (sum) => {
  console.log(sum);
});

// Multiply Nums
function multiplyNums(x, y, cb) {
  return cb(x * y);
}

multiplyNums(2, 3, (multi) => {
  console.log(multi);
})

// Contains Item
function contains(item, list, cb) {
  if(list.includes(item))
    return cb(true)
  else
    return cb(false)
}

contains('Gum',items, (contain) => {
  console.log(contain);
})

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  let nonDuplicates = array.filter((item, index) => array.indexOf(item) >= index);
  return cb(nonDuplicates);
}

removeDuplicates(items, (nonDup) => {
  console.log(nonDup);
})
