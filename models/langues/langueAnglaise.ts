import Expressions from "./expressions";
import LangueInterface from "./langue.interface";

export default class LangueAnglaise implements LangueInterface {
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
