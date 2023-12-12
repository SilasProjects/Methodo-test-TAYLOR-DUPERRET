import ILangue from "../../models/langues/langue.interface";
import VerificateurPalindrome from "../../models/verificateurPalindrome";
import LangueStub from "./langueStub";

export default class VerificateurPalindromeBuilder {
  private lang: ILangue = new LangueStub();

  public Default(): VerificateurPalindrome {
    return new VerificateurPalindromeBuilder().Build();
  }

  public Build(): VerificateurPalindrome {
    return new VerificateurPalindrome(this.lang);
  }

  public AyantPourLangue(lang: ILangue): VerificateurPalindromeBuilder {
    this.lang = lang;
    return this;
  }
}
