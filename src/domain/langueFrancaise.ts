import MomentDeLaJournee from "./momentDeLaJournee";
import Expressions from "./expressions";
import ILangue from "./langue.interface";

export default class LangueFrancaise implements ILangue {
  Feliciter(): string {
    return Expressions.BIEN_DIT;
  }

  Saluer(moment: MomentDeLaJournee): string {
    switch (moment.toString()) {
      case "Matin":
        return Expressions.BONJOUR;
      case "Après-Midi":
        return Expressions.BONJOUR;
      case "Soir":
        return Expressions.BONSOIR;
      case "Nuit":
        return Expressions.BONSOIR;
      default:
        return Expressions.BONJOUR;
    }
  }

  AuRevoir(moment: MomentDeLaJournee): string {
    switch (moment.toString()) {
      case "Matin":
        return Expressions.BONNE_JOURNEE;
      case "Après-Midi":
        return Expressions.BONNE_JOURNEE;
      case "Soir":
        return Expressions.BONNE_SOIREE;
      case "Nuit":
        return Expressions.BONNE_NUIT;
      default:
        return Expressions.AU_REVOIR;
    }
  }
}
