import { describe, expect, test } from "@jest/globals";
import checkPalindrome from "../functions/palindrome";

describe("checkPalindrome", () => {
  test("trucs", () => {
    expect(checkPalindrome("trucs")).toBe(false);
  });
  test("kayak", () => {
    expect(checkPalindrome("kayak")).toBe(true);
  });
  test("Oeoeoeoeoeeoeeeee", () => {
    expect(checkPalindrome("Oeoeoeoeoeeoeeeee")).toBe(false);
  });
  test("À Cuba, Anna a bu ça.", () => {
    expect(checkPalindrome("À Cuba, Anna a bu ça.")).toBe(true);
  });
});
