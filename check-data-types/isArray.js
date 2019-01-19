// Returns if a value is really an array
function isArray(value) {
  return value && typeof value === 'object' && value.constructor === Array;
}

// ES5 actually has a method for this (ie9+)
Array.isArray(value);
