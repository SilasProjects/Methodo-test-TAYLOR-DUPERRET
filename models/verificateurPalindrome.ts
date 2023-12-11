import os from "os";
import LangueInterface from "./langues/langue.interface";

export default class VerificateurPalindrome {
  private lang: LangueInterface;
  constructor(lang: LangueInterface) {
    this.lang = lang;
  }

  public verifier(str: string): string {
    if (!str) return "";

    let result = str.split("").reverse().join("");

    if (str === result) result += os.EOL + this.lang.Feliciter();

    return this.lang.Saluer() + os.EOL + result + os.EOL + this.lang.AuRevoir();
  }
}
