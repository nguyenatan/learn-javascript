// From typeof more things than just an ordinary number will return "number" like NaN and Infinity.
// To know if a value really is a number the function isFinite is also required.
function isNumber(value) {
  return typeof value === 'number' && isFinite(value);
}
