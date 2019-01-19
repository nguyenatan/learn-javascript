// Returns if a value is an error object
function isError(value) {
  return value instanceof Error && value.message !== 'undefined';
}
