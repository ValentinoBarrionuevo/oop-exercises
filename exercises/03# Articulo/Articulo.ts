class Articulo{
    private marca: string;
    private modelo: string;

    constructor(marca: string, modelo :string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    public getMarca(): string {
        return this.marca;
    }
    public getModelo(): string {
        return this.modelo;
    }
}

const MarcaYModelo = new Articulo ("Volkswagen", "Suran")

console.log(`Marca: ${MarcaYModelo.getMarca()}`)
console.log(`Modelo: ${MarcaYModelo.getModelo(  )}`)