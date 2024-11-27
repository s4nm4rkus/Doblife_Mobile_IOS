/**
 * Capitalizes the first letter of a given string and makes the rest lowercase.
 * @param {string} name - The string to capitalize.
 * @returns {string} - The capitalized string.
 */
export function capitalize(name) {
  if (!name) return "";
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

export function isEmptyObject(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}
