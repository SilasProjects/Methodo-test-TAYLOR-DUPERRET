import ILangue from "../../src/domain/langue.interface";
import MomentDeLaJournee from "../../src/domain/momentDeLaJournee";

export default class LangueFake implements ILangue {
  Feliciter(): string {
    return "Félicitations";
  }
  Saluer(moment: MomentDeLaJournee): string {
    return "Wesh/" + moment.toString();
  }
  AuRevoir(moment: MomentDeLaJournee): string {
    return "Ciao/" + moment.toString();
  }
}
