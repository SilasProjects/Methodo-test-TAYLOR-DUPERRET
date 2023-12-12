import MomentDeLaJournee from "./momentDeLaJournee";
import Expressions from "./expressions";
import ILangue from "./langue.interface";

export default class LangueAnglaise implements ILangue {
  Feliciter(): string {
    return Expressions.WELL_SAID;
  }

  Saluer(moment: MomentDeLaJournee): string {
    switch (moment.toString()) {
      case "Matin":
        return Expressions.GOOD_MORNING;
      case "Après-Midi":
        return Expressions.GOOD_AFTERNOON;
      case "Soir":
        return Expressions.GOOD_EVENING;
      case "Nuit":
        return Expressions.GOOD_NIGHT;
      default:
        return Expressions.HELLO;
    }
  }

  AuRevoir(moment: MomentDeLaJournee): string {
    switch (moment.toString()) {
      case "Matin":
        return Expressions.GOOD_BYE;
      case "Après-Midi":
        return Expressions.GOOD_BYE;
      case "Soir":
        return Expressions.GOOD_BYE;
      case "Nuit":
        return Expressions.GOOD_NIGHT;
      default:
        return Expressions.GOOD_BYE;
    }
  }
}
