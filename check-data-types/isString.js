// A string is always a string so this one is easy.
// Except if called with new (new String) typeof will instead return "object".
// So to also include those strings instanceof can be used.
function isString(value) {
  return typeof value === 'string' || value instanceof String
}
