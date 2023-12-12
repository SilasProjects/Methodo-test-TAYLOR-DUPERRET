import { describe, expect, test } from "@jest/globals";
import os from "os";
import LangueFrancaise from "../models/langues/langueFrancaise";
import VerificateurPalindromeBuilder from "./utilities/verificateurPalindromBuilder";
import LangueAnglaise from "../models/langues/langueAnglaise";
import ILangue from "../models/langues/langue.interface";

describe("On vérifie si l'entrée est un palindrome.", () => {
  type Test = [string, ILangue];
  const palindromes: Test[] = [
    ["kayak", new LangueFrancaise()],
    ["radar", new LangueAnglaise()],
  ];
  const nonPalindromes: Test[] = [
    ["ynov", new LangueFrancaise()],
    ["tests", new LangueAnglaise()],
  ];

  test.each([["kayak"], ["ynov"]])(
    "QUAND on saisit une chaine ALORS celle-ci est renvoyée en miroir.",
    (chaine: string) => {
      const verificateur = new VerificateurPalindromeBuilder().Default();
      const res = verificateur.verifier(chaine);

      const miroir = chaine.split("").reverse().join("");

      expect(res).toContain(miroir);
    }
  );

  test.each(palindromes)(
    "ETANT DONNE un utilisateur parlant une langue QUAND on saisit un palindrome ALORS celui-ci est renvoyé ET le « Bien dit » de cette langue est envoyé.",
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

  test.each([...palindromes, ...nonPalindromes])(
    "ETANT DONNE un utilisateur parlant une langue QUAND on saisit une chaine ALORS le « Bonjour » de cette langue est envoyé avant toute réponse.",
    (chaine: string, lang: ILangue) => {
      const verificateur = new VerificateurPalindromeBuilder()
        .AyantPourLangue(lang)
        .Build();
      const res = verificateur.verifier(chaine);
      expect(res.startsWith(lang.Saluer() + os.EOL)).toBe(true);
    }
  );

  test.each([...palindromes, ...nonPalindromes])(
    "ETANT DONNE un utilisateur parlant une langue QUAND on saisit une chaine ALORS le « Au revoir » de cette langue est envoyé en dernier.",
    (chaine: string, lang: ILangue) => {
      const verificateur = new VerificateurPalindromeBuilder()
        .AyantPourLangue(lang)
        .Build();
      const res = verificateur.verifier(chaine);

      expect(res.endsWith(os.EOL + lang.AuRevoir())).toBe(true);
    }
  );
});
