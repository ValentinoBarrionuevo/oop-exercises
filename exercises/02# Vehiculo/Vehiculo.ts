class Vehiculo {
    public marca: string;
    public modelo: string;
    private patente: string;

    constructor(marca: string, modelo: string, patente: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }

    public getPatente(): string {
        return this.patente;
    }

}

const MiAuto = new Vehiculo ("Toyota", "Corolla", "JAD 077")

console.log(`Marca: ${MiAuto.marca}`);
console.log(`Modelo: ${MiAuto.modelo}`);
console.log(`Patente: ${MiAuto.patente}`);
console.log(`Patente: ${MiAuto.getPatente()}`);
