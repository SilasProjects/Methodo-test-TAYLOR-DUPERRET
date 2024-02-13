import { describe, expect, test } from "@jest/globals";
import * as os from "os";
import VerificateurPalindromeBuilder from "./utilities/verificateurPalindromBuilder";
import ILangue from "../src/domain/langue.interface";
import MomentDeLaJournee from "../src/domain/momentDeLaJournee";
import LangueFrancaise from "../src/domain/langueFrancaise";
import LangueAnglaise from "../src/domain/langueAnglaise";
import Expressions from "../src/domain/expressions";

describe("Palindrome :", () => {
  test.each([["kayak"], ["ynov"]])(
    [
      "QUAND on saisit une chaine",
      "ALORS celle-ci est renvoyée en miroir.",
    ].join(" "),
    (chaine: string) => {
      const verificateur = new VerificateurPalindromeBuilder().Default();
      const res = verificateur.verifier(chaine);

      const miroir = chaine.split("").reverse().join("");

      expect(res).toContain(miroir);
    }
  );

  const casesPalindrome: [string, ILangue][] = [
    ["kayak", new LangueFrancaise()],
    ["radar", new LangueFrancaise()],
  ];

  test.each(casesPalindrome)(
    [
      "ETANT DONNE un utilisateur parlant une langue",
      "QUAND on saisit un palindrome",
      "ALORS celui-ci est renvoyé",
      "ET le « Bien dit » de cette langue est envoyé.",
    ].join(" "),
    (chaine: string, lang: ILangue) => {
      const vérificateur = new VerificateurPalindromeBuilder()
        .AyantPourLangue(lang)
        .Build();
      const res = vérificateur.verifier(chaine);
      const miroir = chaine.split("").reverse().join("");
      expect(miroir).toEqual(chaine);
      expect(res).toContain(chaine + os.EOL + lang.Feliciter());
    }
  );

  const casesSalutations = [
    [new LangueFrancaise(), MomentDeLaJournee.Inconnu, Expressions.BONJOUR],
    [new LangueFrancaise(), MomentDeLaJournee.Matin, Expressions.BONJOUR],
    [new LangueFrancaise(), MomentDeLaJournee.ApresMidi, Expressions.BONJOUR],
    [new LangueFrancaise(), MomentDeLaJournee.Soir, Expressions.BONSOIR],
    [new LangueFrancaise(), MomentDeLaJournee.Nuit, Expressions.BONSOIR],
    [new LangueAnglaise(), MomentDeLaJournee.Inconnu, Expressions.HELLO],
    [new LangueAnglaise(), MomentDeLaJournee.Matin, Expressions.GOOD_MORNING],
    [
      new LangueAnglaise(),
      MomentDeLaJournee.ApresMidi,
      Expressions.GOOD_AFTERNOON,
    ],
    [new LangueAnglaise(), MomentDeLaJournee.Soir, Expressions.GOOD_EVENING],
    [new LangueAnglaise(), MomentDeLaJournee.Nuit, Expressions.GOOD_NIGHT],
  ];

  test.each(casesSalutations as [ILangue, MomentDeLaJournee, string][])(
    [
      "ETANT DONNE un utilisateur parlant une langue",
      "ET ETANT DONNE un moment de la journée",
      "QUAND on saisit une chaine",
      "ALORS le « Bonjour » de cette langue à ce moment de la journée est envoyé avant toute réponse.",
    ].join(" "),
    (lang: ILangue, moment: MomentDeLaJournee, salutation: string) => {
      const chaine = "kayak";

      const verificateur = new VerificateurPalindromeBuilder()
        .AyantPourLangue(lang)
        .AyantPourMomentDeLaJournee(moment)
        .Build();
      const res = verificateur.verifier(chaine);
      expect(res.startsWith(salutation + os.EOL)).toBe(true);
    }
  );

  const casesAuRevoir = [
    [new LangueFrancaise(), MomentDeLaJournee.Inconnu, Expressions.AU_REVOIR],
    [new LangueFrancaise(), MomentDeLaJournee.Matin, Expressions.BONNE_JOURNEE],
    [
      new LangueFrancaise(),
      MomentDeLaJournee.ApresMidi,
      Expressions.BONNE_JOURNEE,
    ],
    [new LangueFrancaise(), MomentDeLaJournee.Soir, Expressions.BONNE_SOIREE],
    [new LangueFrancaise(), MomentDeLaJournee.Nuit, Expressions.BONNE_NUIT],
    [new LangueAnglaise(), MomentDeLaJournee.Inconnu, Expressions.GOOD_BYE],
    [new LangueAnglaise(), MomentDeLaJournee.Matin, Expressions.GOOD_BYE],
    [new LangueAnglaise(), MomentDeLaJournee.ApresMidi, Expressions.GOOD_BYE],
    [new LangueAnglaise(), MomentDeLaJournee.Soir, Expressions.GOOD_BYE],
    [new LangueAnglaise(), MomentDeLaJournee.Nuit, Expressions.GOOD_NIGHT],
  ];

  test.each(casesAuRevoir as [ILangue, MomentDeLaJournee, string][])(
    [
      "ETANT DONNE un utilisateur parlant une langue",
      "ET ETANT DONNE un moment de la journée",
      "QUAND on saisit une chaine",
      "ALORS le « Au revoir » de cette langue à ce moment de la journée est envoyé à la fin.",
    ].join(" "),
    (lang: ILangue, moment: MomentDeLaJournee, aurevoir: string) => {
      const chaine = "kayak";

      const verificateur = new VerificateurPalindromeBuilder()
        .AyantPourLangue(lang)
        .AyantPourMomentDeLaJournee(moment)
        .Build();
      const res = verificateur.verifier(chaine);

      expect(res.endsWith(os.EOL + aurevoir)).toBe(true);
    }
  );
});
