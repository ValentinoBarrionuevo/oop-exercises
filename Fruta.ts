class Fruta {
    private Color: string;
    private Peso: number;
    private esEstacional: boolean;

    constructor();
    constructor(Color: string, Peso: number, esEstacional: boolean)



    constructor(Color?: string, Peso?: number, esEstacional?: boolean) {
        if (Color!== undefined && Peso !== undefined && esEstacional !== undefined) {
            this.Color = Color;
            this.Peso =  Peso;
            this.esEstacional = esEstacional;
        } else {
            this.Color = "Desconocido";
            this.Peso = 0;
            this.esEstacional = false;
        }
    }

    public getColor(): string {
        return this.Color;
    }
    public setColor(newColor: string): void {
        this.Color = newColor;
    }
    public getPeso(): number {
        return this.Peso;
    }
    public setPeso(Peso: number): void {
        this.Peso = Peso;
    }
    public getesEstacional(): boolean {
        return this.esEstacional;

    }

    public setesEstacional(esEstacional: boolean): void {
        this.esEstacional = esEstacional;
    }
    public esComestible(): boolean {  
        if (this.getPeso() < 200 && this.getesEstacional()) { 
            return true;
        } else {
            return false;
        }
    }
}

const MiFruta = new Fruta("Manzana", 180, true)

console.log(`La fruta es comestible? ${MiFruta.esComestible()}`);

const otraFruta = new Fruta("Sandia", 5000, true);
console.log(`La sandia es comestible? ${otraFruta.esComestible()}`);
   