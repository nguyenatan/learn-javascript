// Return if a value is a RegExp
function isRegExp(value) {
  return value && typeof value === 'object' && value.constructor === RegExp;
}
