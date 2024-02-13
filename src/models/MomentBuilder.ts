import MomentDeLaJournee from "../domain/momentDeLaJournee";

export default class MomentBuilder {
  public static fromDate(date: Date) {
    return this.getMomentFromDate(date);
  }

  public static today(): MomentDeLaJournee {
    return this.getMomentFromDate(new Date());
  }

  private static getMomentFromDate(date: Date) {
    const hour = parseInt(date.toLocaleTimeString().split(":")[0]);
    if (hour < 6 || hour > 22) return MomentDeLaJournee.Nuit;
    if (hour > 18) return MomentDeLaJournee.Soir;
    if (hour > 12) return MomentDeLaJournee.ApresMidi;
    return MomentDeLaJournee.Matin;
  }
}
