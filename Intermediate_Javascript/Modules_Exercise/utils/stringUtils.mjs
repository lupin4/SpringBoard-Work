export default class StringUtils {
  /**
   * Reverses a string.
   * @param {string} str - The string to reverse.
   * @returns {string} The reversed string.
   */
  static reverseString(str) {
    return str.split("").reverse().join("");
  }

  /**
   * Capitalizes the first letter of each word in a string.
   * @param {string} str - The string to capitalize.
   * @returns {string} The capitalized string.
   */
  static capitalize(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  }

  /**
   * Converts a string to camelCase.
   * @param {string} str - The string to convert.
   * @returns {string} The camelCased string.
   */
  static toCamelCase(str) {
    return str.replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
  }

  /**
   * Truncates a string to a specified length and adds an ellipsis.
   * @param {string} str - The string to truncate.
   * @param {number} maxLength - The maximum length of the string.
   * @returns {string} The truncated string.
   */
  static truncate(str, maxLength) {
    return str.length > maxLength ? str.slice(0, maxLength - 3) + '...' : str;
  }

  /**
   * Removes HTML tags from a string.
   * @param {string} str - The string containing HTML.
   * @returns {string} The string with HTML tags removed.
   */
  static stripHtml(str) {
    return str.replace(/<[^>]*>/g, '');
  }

  /**
   * Checks if a string is a valid email address.
   * @param {string} str - The string to check.
   * @returns {boolean} True if the string is a valid email, false otherwise.
   */
  static isValidEmail(str) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(str);
  }

  /**
   * Generates a slug from a string.
   * @param {string} str - The string to convert to a slug.
   * @returns {string} The generated slug.
   */
  static slugify(str) {
    return str.toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/[^\w-]+/g, '')
              .replace(/--+/g, '-')
              .replace(/^-+/, '')
              .replace(/-+$/, '');
  }

  /**
   * Escapes special characters in a string for use in a regular expression.
   * @param {string} str - The string to escape.
   * @returns {string} The escaped string.
   */
  static escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}


