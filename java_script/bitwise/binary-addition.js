// addBinary - adds two numbers, their sum will be returned in binary string.
function addBinary(a, b) {
  return ((a + b) >>> 0).toString(2);
}

console.log(addBinary(1, 2)) // result: 11
