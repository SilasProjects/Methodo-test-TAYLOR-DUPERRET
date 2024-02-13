import readline from "readline";

import ILangue from "../domain/langue.interface";
import MomentDeLaJournee from "../domain/momentDeLaJournee";
import { LangueBuilder } from "./LangueBuilder";
import MomentBuilder from "./MomentBuilder";
import VerificateurPalindrome from "../domain/verificateurPalindrome";

export default class PalindromeConsole {
  private lang: ILangue;
  private moment: MomentDeLaJournee;

  public constructor(lang: ILangue, moment: MomentDeLaJournee) {
    this.lang = lang;
    this.moment = moment;
  }

  public static fromOS() {
    return new PalindromeConsole(
      LangueBuilder.fromOSLocale(),
      MomentBuilder.today()
    );
  }

  start() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question("Entrez un palindrome : ", (input) => {
      const langue = LangueBuilder.fromOSLocale();

      const verificateur = new VerificateurPalindrome(
        langue,
        MomentBuilder.today()
      );

      console.log(verificateur.verifier(input));
      process.kill(0);
    });
  }
}
