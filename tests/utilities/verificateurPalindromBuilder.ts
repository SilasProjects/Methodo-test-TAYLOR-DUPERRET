import LangueFrancaise from "../../models/langues/langueFrancaise";
import VerificateurPalindrome from "../../models/verificateurPalindrome";

export default class VerificateurPalindromeBuilder {
  private lang = new LangueFrancaise();

  public Default(): VerificateurPalindrome {
    return new VerificateurPalindromeBuilder().Build();
  }

  public Build(): VerificateurPalindrome {
    return new VerificateurPalindrome(this.lang);
  }

  public AyantPourLangue(lang: LangueFrancaise): VerificateurPalindromeBuilder {
    this.lang = lang;
    return this;
  }
}
