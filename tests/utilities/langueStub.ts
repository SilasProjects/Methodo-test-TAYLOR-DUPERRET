import ILangue from "../../models/langues/langue.interface";

export default class LangueStub implements ILangue {
  Feliciter(): string {
    return "";
  }

  Saluer(): string {
    return "";
  }

  AuRevoir(): string {
    return "";
  }
}
