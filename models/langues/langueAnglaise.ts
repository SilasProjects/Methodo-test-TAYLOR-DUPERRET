import Expressions from "./expressions";
import ILangue from "./langue.interface";

export default class LangueAnglaise implements ILangue {
  Feliciter(): string {
    return Expressions.WELL_SAID;
  }

  Saluer(): string {
      return Expressions.HELLO;
  }

  AuRevoir(): string {
      return Expressions.GOOD_BYE;
  }
}
