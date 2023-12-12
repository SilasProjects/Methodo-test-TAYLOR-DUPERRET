export default class MomentDeLaJournee {
  private representation: string;
  public static Inconnu: MomentDeLaJournee = new MomentDeLaJournee("Inconnu");
  public static Matin: MomentDeLaJournee = new MomentDeLaJournee("Matin");
  public static ApresMidi: MomentDeLaJournee = new MomentDeLaJournee(
    "Après-Midi"
  );
  public static Soir: MomentDeLaJournee = new MomentDeLaJournee("Soir");
  public static Nuit: MomentDeLaJournee = new MomentDeLaJournee("Nuit");

  private constructor(representation: string) {
    this.representation = representation;
  }

  public toString(): string {
    return this.representation;
  }
}
