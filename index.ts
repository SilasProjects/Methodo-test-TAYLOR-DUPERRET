import checkPalindrome from "./functions/palindrome.js";
import { Translator } from "./models/translator.js";
import readline from "readline";

const locale = "fr";

const translator = new Translator(locale);

console.log(translator.greet());

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question(translator.getPalindromeQuestion(), (input) => {
  const res = checkPalindrome(input);
  if (res) console.log(translator.getPalindromeAnswer());

  console.log(translator.bye());

  process.exit();
});
