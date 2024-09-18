import { StringUtils, NumberUtils } from "./utils/index.mjs";
import "./globalConfigs.mjs";

// StringUtils examples
const reversed = StringUtils.reverseString("Hello, World!");

const allCaps = StringUtils.capitalize("mf doom");

// NumberUtils examples
const isEven = NumberUtils.isEven(4);

const factorial = NumberUtils.factorial(5);

const fibonacci = NumberUtils.fibonacci(10);

// Output results
console.log(reversed, allCaps, isEven, factorial, fibonacci);

// Dynamic Import Example
async function setThemeBasedOnTime() {
  const { setLightTheme, setDarkTheme } = await import("./theme.mjs");
  const hour = new Date().getHours();

  if (hour >= 18 || hour < 6) {
    setDarkTheme();
  } else {
    setLightTheme();
  }
}

setThemeBasedOnTime();

// Side effect example
