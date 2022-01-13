// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  // Write your code here
  var largest_ind = 0;
  var secondLargest = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[largest_ind]) {
      largest_ind = i;
    }
  }
  for (let i of array) {
    if (i < array[largest_ind] && i > secondLargest) {
      secondLargest = i;
    }
  }
  return secondLargest;
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  // Write your code here
  var freq = {};
  for (let i in string) {
    if (string[i].charCodeAt(0) >= 97 && string[i].charCodeAt(0) <= 122) {
      if (string[i] in freq) {
        freq[string[i]] += 1;
      } else {
        freq[string[i]] = 1;
      }
    }
  }
  return freq;
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)

function flatten(unflatObject) {
  // Write your code here
  var new_obj = {};
  console.log(unflatObject);

  function recurr(unflatObject, prev_key) {
    if (typeof unflatObject === "object") {
      for (i in unflatObject) {
        recurr(unflatObject[i], prev_key + "." + i);
      }
    } else {
      new_obj[prev_key] = unflatObject;
    }
    return true;
  }
  for (i in unflatObject) {
    recurr(unflatObject[i], i);
  }
  console.log(new_obj);
  return new_obj;
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
  // Write your code here
  var result = {}
  for (var i in flatObject) {
    var keys = i.split('.')
    keys.reduce(function(r, e, j) {
      return r[e] || (r[e] = isNaN(Number(keys[j + 1])) ? (keys.length - 1 == j ? flatObject[i] : {}) : [])
    }, result)
  }
  console.log(result)
  return result
}
