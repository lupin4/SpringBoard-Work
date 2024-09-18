export default class NumberUtils {
    /**
     * Checks if a number is even.
     * @param {number} num - The number to check.
     * @returns {boolean} True if the number is even, false otherwise.
     */
    static isEven(num) {
        return num % 2 === 0;
    }

    /**
     * Checks if a number is odd.
     * @param {number} num - The number to check.
     * @returns {boolean} True if the number is odd, false otherwise.
     */
    static isOdd(num) {
        return num % 2 !== 0;
    }

    /**
     * Checks if a number is prime.
     * @param {number} num - The number to check.
     * @returns {boolean} True if the number is prime, false otherwise.
     */
    static isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    /**
     * Calculates the factorial of a number.
     * @param {number} num - The number to calculate factorial for.
     * @returns {number} The factorial of the input number.
     */
    static factorial(num) {
        if (num === 0 || num === 1) return 1;
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }

    /**
     * Calculates the Fibonacci number at a given position.
     * @param {number} num - The position in the Fibonacci sequence.
     * @returns {number} The Fibonacci number at the given position.
     */
    static fibonacci(num) { 
        if (num <= 1) return num;
        let a = 0, b = 1, temp;
        for (let i = 2; i <= num; i++) {
            temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }

    /**
     * Calculates the greatest common divisor (GCD) of two numbers.
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @returns {number} The greatest common divisor of a and b.
     */
    static greatestCommonDivisor(a, b) {
        return b === 0 ? Math.abs(a) : NumberUtils.gcd(b, a % b);
    }

    /**
     * Calculates the least common multiple (LCM) of two numbers.
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @returns {number} The least common multiple of a and b.
     */
    static leastCommonMultiple(a, b) {
        return Math.abs(a * b) / NumberUtils.gcd(a, b);
    }

    /**
     * Checks if a number is a perfect square.
     * @param {number} num - The number to check.
     * @returns {boolean} True if the number is a perfect square, false otherwise.
     */
    static isPerfectSquare(num) {
        return Math.sqrt(num) % 1 === 0;
    }

    /**
     * Generates a random integer between min and max (inclusive).
     * @param {number} min - The minimum value.
     * @param {number} max - The maximum value.
     * @returns {number} A random integer between min and max.
     */
    static randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Rounds a number to a specified number of decimal places.
     * @param {number} num - The number to round.
     * @param {number} decimals - The number of decimal places to round to.
     * @returns {number} The rounded number.
     */
    static roundTo(num, decimals) {
        return Number(Math.round(num + 'e' + decimals) + 'e-' + decimals);
    }
}