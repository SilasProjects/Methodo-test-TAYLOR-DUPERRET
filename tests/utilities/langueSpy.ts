import LangueStub from "./langueStub";

export default class LangueSpy extends LangueStub {
  private saluerConsulte: boolean = false;

  public Saluer(): string {
    this.saluerConsulte = true;
    return super.Saluer();
  }

  public SaluerAEteConsulte(): boolean {
    return this.saluerConsulte;
  }
}
