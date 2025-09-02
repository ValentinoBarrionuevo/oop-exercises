class Ninja {
    private arteMarcial: string;
    private arma: string;
    private fuerza: number;
    private salto: number;

    constructor(arteMarcial: string, arma: string, fuerza: number, salto: number) {
        this.arteMarcial = arteMarcial;
        this.arma = arma;
        this.fuerza = fuerza;
        this.salto = salto;
    }
    public getarteMarcial(): string {
        return this.arteMarcial;
    }
    public setarteMarcial(nuevoArteMarcial: string): void {
        this.arteMarcial = nuevoArteMarcial;
    }
    public getarma(): string {
        return this.arma
    }
    public setarma(nuevoArma: string): void {
        this.arma = nuevoArma;
    }
    public getfuerza(): number {
        return this.fuerza;
    }
    public setfuerza(nuevoFuerza: number): void {
        this.fuerza = nuevoFuerza;
    }
    public getsalto(): number {
        return this.salto
    }
    public setsalto(nuevoSalto: number): void {
        this.salto = nuevoSalto;
    }
    saltar(multiplicador: number): void {
        const resultadoSalto = this.salto * multiplicador;
        console.log(`Salto x ${resultadoSalto}`);
    }
    ataque() {
        console.log (`Usa arma: ${this.arma} y Arte Marcial: ${this.arteMarcial}`)
    }
}

const MiNinja = new Ninja ("Judo", "Katana", 100, 20);

MiNinja.ataque();
MiNinja.saltar(2);

