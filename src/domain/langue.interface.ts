import MomentDeLaJournee from "./momentDeLaJournee";

export default interface ILangue {
  Feliciter(): string;
  Saluer(moment: MomentDeLaJournee): string;
  AuRevoir(moment: MomentDeLaJournee): string;
}
