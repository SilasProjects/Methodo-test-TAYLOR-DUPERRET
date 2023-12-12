import os from "os";
import ILangue from "./langue.interface";
import MomentDeLaJournee from "./momentDeLaJournee";

export default class VerificateurPalindrome {
  private lang: ILangue;
  private moment: MomentDeLaJournee;

  constructor(lang: ILangue, moment: MomentDeLaJournee) {
    this.lang = lang;
    this.moment = moment;
  }

  public verifier(str: string): string {
    if (!str) return "";

    let result = str.split("").reverse().join("");

    if (str === result) result += os.EOL + this.lang.Feliciter();

    return (
      this.lang.Saluer(this.moment) +
      os.EOL +
      result +
      os.EOL +
      this.lang.AuRevoir(this.moment)
    );
  }
}
