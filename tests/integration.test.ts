import { describe, expect, test } from "@jest/globals";
import MomentBuilder from "../src/models/MomentBuilder";
import MomentDeLaJournee from "../src/domain/momentDeLaJournee";

describe("Palindrome :", () => {
  const caseMoments = [
    [new Date("12/12/2023 19:00:00"), MomentDeLaJournee.Soir],
    [new Date("12/12/2023 08:35:00"), MomentDeLaJournee.Matin],
    [new Date("12/12/2023 14:12:00"), MomentDeLaJournee.ApresMidi],
    [new Date("12/12/2023 04:00:00"), MomentDeLaJournee.Nuit],
    [new Date("12/12/2023 23:00:00"), MomentDeLaJournee.Nuit],
  ];

  test.each(caseMoments as [Date, MomentDeLaJournee][])(
    "ETANT DONNEE une date ALORS on récupère le moment correspondant",
    (date: Date, moment: MomentDeLaJournee) => {
      const m = MomentBuilder.fromDate(date);
      expect(m).toEqual(moment);
    }
  );
});
