import Expressions from "./expressions";
import ILangue from "./langue.interface";

export default class LangueFrancaise implements ILangue {
  Feliciter(): string {
    return Expressions.BIEN_DIT;
  }

  Saluer(): string {
    return Expressions.BONJOUR;
  }

  AuRevoir(): string {
    return Expressions.AU_REVOIR;
  }
}
