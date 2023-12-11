import Expressions from "./expressions";
import LangueInterface from "./langue.interface";

export default class LangueFrancaise implements LangueInterface {
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
