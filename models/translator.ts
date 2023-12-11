type Locale = "fr" | "en" | "de";

export class Translator {
  private lang: Locale;

  constructor(lang: Locale) {
    this.lang = lang;
  }

  private isDay(): boolean {
    const hour = parseInt(new Date().toLocaleTimeString().split(":")[0]);
    return hour > 6 && hour < 18;
  }

  greet(): string {
    const isDay = this.isDay();

    switch (this.lang) {
      case "fr":
        return `${isDay ? "Bonjour" : "Bonsoir"}`;
      case "en":
        return `${isDay ? "Hello" : "Good evening"}`;
      case "de":
        return `${isDay ? "Hallo" : "Guten abend"}`;
      default:
        return "";
    }
  }

  bye(): string {
    const isDay = this.isDay();

    switch (this.lang) {
      case "fr":
        return `${isDay ? "Au revoir, bonne journée !" : "Au revoir, bonne soirée !"}`;
      case "en":
        return `${isDay ? "Good bye, have a nice day !" : "Good bye, have a nice evening !"}`;
      case "de":
        return `${isDay ? "Auf Wiedersehen, schöner Tag !" : "Auf Wiedersehen, schöner Abend !"}`;
      default:
        return "";
    }
  }

  getPalindromeQuestion(): string {
    switch (this.lang) {
      case "fr":
        return "Entrez une mot ou une phrase : ";
      case "en":
        return "Enter a word or a phrase : ";
      case "de":
        return "Geben Sie ein Wort oder einen Satz ein : ";
      default:
        return "";
    }
  }

  getPalindromeAnswer(): string {
    switch (this.lang) {
      case "fr":
        return "Bien dit !";
      case "en":
        return "Well said !";
      case "de":
        return "Gute sagt !";
      default:
        return "";
    }
  }
}
