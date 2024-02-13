import ILangue from "../domain/langue.interface";
import LangueAnglaise from "../domain/langueAnglaise";
import LangueFrancaise from "../domain/langueFrancaise";

export class LangueBuilder {
  public static fromOSLocale(): ILangue {
    const locale = Intl.DateTimeFormat().resolvedOptions().locale;

    if (locale.toLowerCase().includes("fr")) {
      return new LangueFrancaise();
    }

    if (locale.toLowerCase().includes("en")) {
      return new LangueAnglaise();
    }

    return new LangueFrancaise();
  }
}
