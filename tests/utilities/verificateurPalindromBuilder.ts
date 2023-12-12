import ILangue from "../../src/domain/langue.interface";
import MomentDeLaJournee from "../../src/domain/momentDeLaJournee";
import VerificateurPalindrome from "../../src/domain/verificateurPalindrome";
import LangueStub from "./langueStub";

export default class VerificateurPalindromeBuilder {
  private lang: ILangue = new LangueStub();
  private moment: MomentDeLaJournee = MomentDeLaJournee.Inconnu;

  public Default(): VerificateurPalindrome {
    return new VerificateurPalindromeBuilder().Build();
  }

  public Build(): VerificateurPalindrome {
    return new VerificateurPalindrome(this.lang, this.moment);
  }

  public AyantPourLangue(lang: ILangue): VerificateurPalindromeBuilder {
    this.lang = lang;
    return this;
  }

  public AyantPourMomentDeLaJournee(moment: MomentDeLaJournee) {
    this.moment = moment;
    return this;
  }
}
